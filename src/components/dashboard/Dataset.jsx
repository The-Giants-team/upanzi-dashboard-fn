import DatasetMenu from "../menu/datasetmenu";
import DataCard from "../cards/datasetcards/datacard";
import Datasetmaincard from "../cards/datasetcards/datasetmaincard";


const Dataset = () => {
    return (
           <div>
            <Datasetmaincard/>
            <DatasetMenu/>
            <div className="flex space-x-12">
              <DataCard/>
              <DataCard/>
              <DataCard/>
              <DataCard/>
          
            </div>
            <div className="flex space-x-12">
              <DataCard/>
              <DataCard/>
              <DataCard/>
              <DataCard/>
            </div>
            <div className="flex space-x-12">
              <DataCard/>
              <DataCard/>
              <DataCard/>
              <DataCard/>
            </div>
           </div>
           
        );
      };
      export default Dataset;