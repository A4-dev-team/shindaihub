import { Building, Campus } from "@/types";

// TODO: mapUrlを個別に設定
// TODO: 六甲台地区以外にも対応
const campusList: readonly Campus[] = Object.freeze([
    {
        campusId: 3,
        areaName: "六甲台地区",
        campusName: "鶴甲第１キャンパス",
        mapUrl: "/map_turukabuto_1.png",
    },
    {
        campusId: 1,
        areaName: "六甲台地区",
        campusName: "六甲台第１キャンパス",
        mapUrl: "/map_turukabuto_1.png",
    },
    {
        campusId: 2,
        areaName: "六甲台地区",
        campusName: "六甲台第２キャンパス",
        mapUrl: "/map_turukabuto_1.png",
    },
    {
        campusId: 4,
        areaName: "六甲台地区",
        campusName: "鶴甲第２キャンパス",
        mapUrl: "/map_turukabuto_1.png",
    },
]);

// TODO: campusId = 3以外にも対応
// TODO: positionX, positionY, pictureUrlを正確な値に変更
const buildingList: readonly Building[] = Object.freeze([
    {
        buildingId: 10,
        campusId: 3,
        buildingName: "武道場（養心館）",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 11,
        campusId: 3,
        buildingName: "第二体育館",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 12,
        campusId: 3,
        buildingName: "第一体育館",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 13,
        campusId: 3,
        buildingName:
            "大学教育推進機構（教養教育院）・D棟 （国際コミュニケーションセンター）",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 14,
        campusId: 3,
        buildingName: "大学教育推進機構（教養教育院）・N棟",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 15,
        campusId: 3,
        buildingName: "大学教育推進機構（教養教育院）・K棟",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 16,
        campusId: 3,
        buildingName: "大学教育推進機構（教養教育院）・化学実験室",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 17,
        campusId: 3,
        buildingName:
            "大学教育推進機構（教養教育院、大学教育研究センター）・C棟",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 18,
        campusId: 3,
        buildingName: "国際人間科学部、国際文化学研究科・F棟",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 19,
        campusId: 3,
        buildingName: "大学教育推進機構（教養教育院）・M棟",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 20,
        campusId: 3,
        buildingName:
            "大学教育推進機構（教養教育院）,国際人間科学部,国際文化学研究科・B棟（学生センター）",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 21,
        campusId: 3,
        buildingName: "大学教育推進機構（教養教育院）・大、中講義室",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 22,
        campusId: 3,
        buildingName:
            "国際人間科学部、国際文化学研究科・L棟（キャンパスライフ支援センター）",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 23,
        campusId: 3,
        buildingName: "国際人間科学部、国際文化学研究科・E棟",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 24,
        campusId: 3,
        buildingName:
            "A棟（総合・国際文化学図書館、ラーニングコモンズ、キャリアセンター）",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
    {
        buildingId: 25,
        campusId: 3,
        buildingName: "学生会館",
        positionX: 326,
        positionY: 124,
        pictureUrl: "#",
    },
]);

export { campusList, buildingList };
