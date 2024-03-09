import { useRouter } from "next/navigation";
import { BuildingSearchFormInputType } from "../types";

const useSubmitBuildingSearchForm = () => {
    const router = useRouter();

    const onSubmit = (data: BuildingSearchFormInputType) => {
        router.push(
            `/campus-map?campusId=${data.campusId}&keyword=${data.keyword}`
        );
    };

    return { onSubmit };
};

export { useSubmitBuildingSearchForm };
