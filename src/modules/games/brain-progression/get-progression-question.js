import generateProgressionParameters from './generate-progression-parameters.js';
import generateProgression from './generate-progression.js';

export default () => {
  const progressionParameters = generateProgressionParameters();
  const [question, correctAnswer] = generateProgression(...progressionParameters);
  return [question, correctAnswer];
};
