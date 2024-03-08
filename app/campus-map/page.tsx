"use client";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { constant } from "@/constant";

// Types
type BuildingSearchFormInputType = {
    campusId: number;
    keyword: string;
};
type BuildingSearchFormProps = BuildingSearchFormInputType;
type BuildingSearchResultCardProps = {
    isHit: boolean;
    campusName?: string;
    mapImageUrl?: string;
    buildingId?: number;
    buildingName?: string;
};
type GoogleMapIFrameProps = {
    lat: number;
    lng: number;
    q?: string;
};

// Utility functions
const getCampusById = (id: number) => {
    return constant.campusList.find((campus) => campus.campusId == id);
};
const findBuildingByKeyword = (campusId: number, keyword: string) => {
    if (keyword == "") return;
    const buildingsInCampus = constant.buildingList.filter(
        (building) => building.campusId == campusId
    );
    return buildingsInCampus.find((building) =>
        building.buildingName.includes(keyword)
    );
};

// Components
const BuildingSearchForm = (props: BuildingSearchFormProps) => {
    const { campusId, keyword } = props;
    const router = useRouter();
    const {
        formState: { isValid },
        handleSubmit,
        control,
    } = useForm<BuildingSearchFormInputType>({
        mode: "onSubmit",
        defaultValues: {
            campusId,
            keyword,
        },
    });

    const onSubmit = (data: BuildingSearchFormInputType) => {
        router.push(
            `/campus-map?campusId=${data.campusId}&keyword=${data.keyword}`
        );
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
                        value={field.value}
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
    const { campusName, buildingName, buildingId, mapImageUrl, isHit } = props;

    return (
        <div className="w-full border rounded-lg border-bluenormal bg-white p-6">
            <div className="flex flex-col space-y-4">
                <div className="text-2xl font-semibold">建物詳細</div>
                {isHit ? (
                    <div className="flex flex-col space-y-1">
                        <div>キャンパス名: {campusName}</div>
                        <div>建物名: {buildingName}</div>
                        <div>
                            イラストマップ:{" "}
                            <Link
                                href={mapImageUrl || "#"}
                                className="underline text-blue-800"
                            >
                                {campusName} {buildingId}番
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>情報が見つかりませんでした。</div>
                )}
            </div>
        </div>
    );
};

const GoogleMapIFrame = (props: GoogleMapIFrameProps) => {
    const { lat, lng, q } = props;
    const center = `${lat}, ${lng}`;

    return (
        <div className="w-full">
            <iframe
                width="100%"
                height="600px"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${
                    process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
                }&q=${q || center}&center=${center}&zoom=18`}
            ></iframe>
        </div>
    );
};

export default function Page() {
    const searchParams = useSearchParams();
    const campusId = parseInt(searchParams.get("campusId") || "3");
    const keyword = searchParams.get("keyword") || "";

    const isFirstRendering = !searchParams.has("keyword");

    const building = findBuildingByKeyword(campusId, keyword);
    const campus = getCampusById(campusId);

    if (!campus) {
        throw Error("campusIdが見つかりません。");
    }

    return (
        <div className="container flex flex-col max-w-3xl items-center py-6 space-y-4 px-4">
            <BuildingSearchForm campusId={campusId} keyword={keyword} />
            {isFirstRendering ? null : (
                <SearchBuildingResultCard
                    isHit={!!building}
                    campusName={campus.campusName}
                    mapImageUrl={campus.mapImageUrl}
                    buildingId={building?.buildingId}
                    buildingName={building?.buildingName}
                />
            )}
            <GoogleMapIFrame
                lat={building ? building.lat : campus.lat}
                lng={building ? building.lng : campus.lng}
                q={building ? undefined : campus.campusName}
            />
        </div>
    );
}
