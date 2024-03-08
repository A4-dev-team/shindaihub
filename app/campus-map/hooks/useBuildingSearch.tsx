import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { findAllBuildingsByKeyword } from "../utils";
import { BuildingSearchFormInputType } from "../components/BuildingSearchForm";
import { Building } from "@/types";

const useBuildingSearch = (defaultValues: BuildingSearchFormInputType) => {
    const [isShowSuggestions, setIsShowSuggestions] = useState(false);
    const [buildingSuggestions, setBuildingSuggestions] =
        useState<Building[]>();
    const {
        formState: { isValid },
        handleSubmit,
        control,
        setValue,
        watch,
    } = useForm<BuildingSearchFormInputType>({
        mode: "onSubmit",
        defaultValues,
    });

    const watchCampusId = watch("campusId");
    const watchKeyword = watch("keyword");

    useEffect(() => {
        const suggestions = findAllBuildingsByKeyword(
            watchCampusId,
            watchKeyword
        );
        if (suggestions) {
            setBuildingSuggestions(suggestions);
        } else {
            setBuildingSuggestions([]);
        }
    }, [watchCampusId, watchKeyword]);

    return {
        isValid,
        control,
        handleSubmit,
        setValue,
        buildingSuggestions,
        isShowSuggestions,
        setIsShowSuggestions,
    };
};

export { useBuildingSearch };
