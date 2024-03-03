export type Campus = {
    campusId: number;
    areaName: string;
    campusName: string;
    mapUrl: string;
};

export type Building = {
    buildingId: number;
    campusId: number;
    buildingName: string;
    positionX: number;
    positionY: number;
    pictureUrl: string;
};
