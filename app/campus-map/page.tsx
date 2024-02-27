"use client";
import Image from "next/image";
import Link from "next/link";
import { FaMapPin } from "react-icons/fa";
import { Building, Campus } from "@/types";
import { constant } from "@/constant";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { SkeltonImage } from "@/components/SkeltonImage";

// Types
type BuildingSearchStateType = {
    isInit: boolean;
    isHit: boolean;
};
type BuildingSearchResultType = Building & BuildingSearchStateType;
type BuildingSearchFormInputType = {
    campusId: number;
    keyword: string;
};
type BuildingSearchFormProps = {
    setResult: React.Dispatch<React.SetStateAction<BuildingSearchResultType>>;
};
type BuildingSearchResultCardProps = BuildingSearchResultType;
type MapImageProps = BuildingSearchResultType;

// Utility functions
const getCampusById = (id: number) => {
    return constant.campusList.find((campus) => campus.campusId == id);
};
const findBuildingByKeyword = (campusId: number, keyword: string) => {
    const buildingsInCampus = constant.buildingList.filter(
        (building) => building.campusId == campusId
    );
    return buildingsInCampus.find((building) =>
        building.buildingName.includes(keyword)
    );
};

// Components
const BuildingSearchForm = (props: BuildingSearchFormProps) => {
    const { setResult } = props;
    const {
        formState: { isValid },
        handleSubmit,
        control,
    } = useForm<BuildingSearchFormInputType>({
        mode: "onSubmit",
        defaultValues: {
            campusId: constant.campusList[0].campusId,
            keyword: "",
        },
    });

    const onSubmit = (data: BuildingSearchFormInputType) => {
        const hitBuilding = findBuildingByKeyword(data.campusId, data.keyword);
        if (hitBuilding) {
            const result: BuildingSearchResultType = {
                ...hitBuilding,
                isHit: true,
                isInit: false,
            };
            setResult(result);
        } else {
            setResult((prev) => ({
                ...prev,
                campusId: data.campusId,
                isHit: false,
                isInit: false,
            }));
        }
    };

    const buttonColor = isValid
        ? "bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-400"
        : "bg-gray-300";

    return (
        <form
            className="flex flex-col w-full items-center md:flex-row md:items-start space-y-4 md:space-x-4 md:space-y-0"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                control={control}
                name="campusId"
                rules={{ required: "必須項目です" }}
                render={({ field }) => (
                    <select
                        className="block w-2/3 md:w-36 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                    >
                        {constant.campusList.map((campus) => {
                            return (
                                <option
                                    key={campus.campusId}
                                    value={campus.campusId}
                                >
                                    {campus.campusName}
                                </option>
                            );
                        })}
                    </select>
                )}
            />
            <Controller
                control={control}
                name="keyword"
                rules={{ required: "必須項目です" }}
                render={({ field }) => (
                    <input
                        type="text"
                        className="w-2/3 md:grow block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="キーワードを入力"
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                    />
                )}
            />
            <button
                type="submit"
                disabled={!isValid}
                className={`w-2/3 md:w-24 py-2 px-4 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 ${buttonColor}`}
            >
                検索
            </button>
        </form>
    );
};

const SearchBuildingResultCard = (props: BuildingSearchResultCardProps) => {
    const { buildingId, campusId, buildingName, pictureUrl, isInit, isHit } =
        props;

    if (isInit) return;

    const campus = getCampusById(campusId);

    return (
        <div className="w-full border rounded-lg border-bluenormal bg-white p-6">
            <div className="flex flex-col space-y-4">
                <div className="text-2xl font-semibold">建物詳細</div>
                {isHit ? (
                    <div>
                        <div>キャンパス名: {campus!.campusName}</div>
                        <div>建物名: {buildingName}</div>
                        <div>番号: {buildingId}</div>
                        <div>
                            正面画像URL:
                            <Link href={pictureUrl}>{pictureUrl}</Link>
                        </div>
                    </div>
                ) : (
                    <div>情報が見つかりませんでした。</div>
                )}
            </div>
        </div>
    );
};

const MapImage = (props: MapImageProps) => {
    const { campusId, positionX, positionY, isHit } = props;
    const campus = getCampusById(campusId);

    return (
        <div className="relative">
            {campus ? (
                <Image
                    src={campus.mapUrl}
                    alt="campus_map"
                    width={750}
                    height={750}
                    className="rounded-sm"
                />
            ) : (
                <SkeltonImage width={750} height={750} />
            )}

            {isHit ? (
                <FaMapPin
                    className="h-8 w-8 text-yellow-300 absolute animate-bounce"
                    style={{ top: `${positionY}px`, left: `${positionX}px` }}
                />
            ) : null}
        </div>
    );
};

export default function Page() {
    const [searchResult, setSearchResult] = useState<BuildingSearchResultType>({
        buildingId: 0,
        campusId: constant.campusList[0].campusId,
        buildingName: "",
        positionX: 0,
        positionY: 0,
        pictureUrl: "#",
        isHit: false,
        isInit: true,
    });

    return (
        <div className="flex flex-col items-center py-6 space-y-4 md:px-0 px-4">
            <BuildingSearchForm setResult={setSearchResult} />
            <SearchBuildingResultCard {...searchResult} />
            <MapImage {...searchResult} />
        </div>
    );
}
