import { useForm } from "react-hook-form";
import { BuildingSearchFormInputType } from "../types";

const useBuildingSearchForm = (defaultValues: BuildingSearchFormInputType) => {
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

    return { isValid, handleSubmit, control, setValue, watch };
};

export { useBuildingSearchForm };
