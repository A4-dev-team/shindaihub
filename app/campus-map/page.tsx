"use client";
import { useSearchParams } from "next/navigation";
import { findCampusById, findBuildingByKeyword } from "./utils";
import {
    BuildingSearchForm,
    BuildingSearchResultCard,
    GoogleMapIFrame,
} from "./components";

export default function Page() {
    const searchParams = useSearchParams();
    const campusId = parseInt(searchParams.get("campusId") || "3");
    const keyword = searchParams.get("keyword") || "";

    const isFirstRendering = !searchParams.has("keyword");

    const building = findBuildingByKeyword(campusId, keyword);
    const campus = findCampusById(campusId);

    if (!campus) {
        throw Error("campusIdが登録されていません。");
    }

    return (
        <div className="container flex flex-col max-w-3xl items-center py-6 space-y-4 px-4">
            <BuildingSearchForm campusId={campusId} keyword={keyword} />
            {!isFirstRendering && (
                <BuildingSearchResultCard
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
