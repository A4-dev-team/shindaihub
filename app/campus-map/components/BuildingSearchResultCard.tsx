import Link from "next/link";

type BuildingSearchResultCardProps = {
    isHit: boolean;
    campusName?: string;
    mapImageUrl?: string;
    buildingId?: number;
    buildingName?: string;
};

const BuildingSearchResultCard = (props: BuildingSearchResultCardProps) => {
    const { campusName, buildingName, buildingId, mapImageUrl, isHit } = props;

    return (
        <div className="w-full border rounded-lg border-bluenormal bg-white p-6">
            <div className="flex flex-col space-y-4">
                <div className="text-2xl font-semibold">検索結果</div>
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

export { BuildingSearchResultCard };
