import { infoModel } from "./infoModel";
import { resultsModel } from "./resultModel";

export interface responseModel extends infoModel,resultsModel {

    info:infoModel
    results:resultsModel
}