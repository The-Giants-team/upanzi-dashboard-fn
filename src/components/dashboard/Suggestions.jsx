import SuggestionMainCard from "../cards/suggestions/MainSuggestionCard";
import DatasetMenu from "../menu/datasetmenu";
import SuggestionCard from "../cards/suggestions/SuggestionCard";

const Suggestions = () => {
    return (
        <div>
            <SuggestionMainCard />
            <DatasetMenu />
            <div className="flex space-x-24 ml-24">
                <div className="flex flex-col space-y-4">
                    <SuggestionCard />
                    <SuggestionCard />
                    <SuggestionCard />
                    <SuggestionCard />
                    <SuggestionCard />
                    <SuggestionCard />
                </div>
                <div className="flex flex-col space-y-4">
                    <SuggestionCard />
                    <SuggestionCard />
                    <SuggestionCard />
                    <SuggestionCard />
                    <SuggestionCard />
                    <SuggestionCard />
                </div>
            </div>
        </div>
    );
};

export default Suggestions;
