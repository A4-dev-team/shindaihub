export type Campus = {
    campusId: number;
    areaName: string;
    campusName: string;
    mapImageUrl: string;
    lat: number;
    lng: number;
};

export type Building = {
    buildingId: number;
    campusId: number;
    buildingName: string;
    lat: number;
    lng: number;
    buildingLayoutPdfUrl?: string;
};
