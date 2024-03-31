import { Controller } from "react-hook-form";
import { constant } from "@/constant";
import {
    useBuildingSearchForm,
    useBuildingSuggestion,
    useSubmitBuildingSearchForm,
} from "../hooks";
import { BuildingSearchFormInputType } from "../types";

// TODO: 肥大化しているので、リファクタリングを検討
const BuildingSearchForm = (props: BuildingSearchFormInputType) => {
    const { campusId, keyword } = props;
    const { isValid, control, handleSubmit, setValue, watch, trigger } =
        useBuildingSearchForm({ campusId, keyword });

    const watchCampusId = watch("campusId");
    const watchKeyword = watch("keyword");

    const { buildingSuggestions, isShowSuggestions, setIsShowSuggestions } =
        useBuildingSuggestion({
            campusId: watchCampusId,
            keyword: watchKeyword,
        });

    const { onSubmit } = useSubmitBuildingSearchForm();

    const handleClickSuggestions = async (buildingName: string) => {
        setValue("keyword", buildingName);
        await trigger("keyword");
    };

    const buttonColor = isValid
        ? "bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-400"
        : "bg-gray-300";

    return (
        <form
            className="flex flex-col w-full items-center md:flex-row md:items-start space-y-4 md:space-x-4 md:space-y-0"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                control={control}
                name="campusId"
                rules={{ required: "必須項目です" }}
                render={({ field }) => (
                    <select
                        className="block w-2/3 md:w-36 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                    >
                        {constant.campusList.map((campus) => {
                            return (
                                <option
                                    key={campus.campusId}
                                    value={campus.campusId}
                                >
                                    {campus.campusName}
                                </option>
                            );
                        })}
                    </select>
                )}
            />
            <Controller
                control={control}
                name="keyword"
                rules={{ required: "必須項目です" }}
                render={({ field }) => (
                    <div className="w-2/3 md:grow relative">
                        <input
                            type="text"
                            className="w-full block py-2 px-3 pr-10 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="例：〇〇棟"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={() => setIsShowSuggestions(false)}
                            onFocus={() => setIsShowSuggestions(true)}
                        />
                        {field.value && (
                            <div
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={() => {
                                    setValue("keyword", "");
                                }}
                            >
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        )}
                        {isShowSuggestions && (
                            <ul className="w-full absolute z-10 bg-white border-gray-300 rounded-md shadow-lg">
                                {buildingSuggestions &&
                                    buildingSuggestions.map(
                                        (suggestion, index) => (
                                            <li
                                                key={index}
                                                className="p-2 hover:bg-gray-100 border-b"
                                                onMouseDown={() =>
                                                    handleClickSuggestions(
                                                        suggestion.buildingName
                                                    )
                                                }
                                            >
                                                {suggestion.buildingName}
                                            </li>
                                        )
                                    )}
                            </ul>
                        )}
                    </div>
                )}
            />
            <button
                type="submit"
                disabled={!isValid}
                className={`w-2/3 md:w-24 py-2 px-4 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 ${buttonColor}`}
            >
                検索
            </button>
        </form>
    );
};

export { BuildingSearchForm };
