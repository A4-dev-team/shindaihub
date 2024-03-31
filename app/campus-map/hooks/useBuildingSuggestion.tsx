import { useState, useEffect } from "react";
import { findAllBuildingsByKeyword } from "../utils";
import { BuildingSearchFormInputType } from "../types";
import { Building } from "@/types";

const useBuildingSuggestion = (formValues: BuildingSearchFormInputType) => {
    const { campusId, keyword } = formValues;
    const [isShowSuggestions, setIsShowSuggestions] = useState(false);
    const [buildingSuggestions, setBuildingSuggestions] =
        useState<Building[]>();

    useEffect(() => {
        const suggestions = findAllBuildingsByKeyword(campusId, keyword);
        if (suggestions) {
            setBuildingSuggestions(suggestions);
        } else {
            setBuildingSuggestions([]);
        }
    }, [campusId, keyword]);

    return { buildingSuggestions, isShowSuggestions, setIsShowSuggestions };
};

export { useBuildingSuggestion };
