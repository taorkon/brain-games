import generateProgressionParameters from "./generate-progression-parameters.js";
import generateProgression from "./generate-progression.js";

export default () => {
    let question, correctAnswer;
    let progressionParameters  = generateProgressionParameters();
    [question, correctAnswer] = generateProgression(...progressionParameters);
    return [question, correctAnswer];
}