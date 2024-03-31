import { constant } from "@/constant";

const findCampusById = (id: number) => {
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

const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
};

const findAllBuildingsByKeyword = (campusId: number, keyword: string) => {
    if (keyword == "") {
        return constant.buildingList.filter(
            (building) => building.campusId == campusId
        );
    }
    const escapedKeyword = escapeRegExp(keyword);
    const matches = constant.buildingList.filter((building) => {
        const regex = new RegExp(escapedKeyword, "gi");
        return (
            building.buildingName.match(regex) && building.campusId == campusId
        );
    });
    return matches;
};

export { findCampusById, findBuildingByKeyword, findAllBuildingsByKeyword };
