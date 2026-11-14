import jsPsychHtmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import store from 'store2';
import { isTouchScreen, getStimulus } from '../experimentSetup';
import { mediaAssets } from '../experiment';

// set-up screen
const setupFixationData = [
  {
    onFinish: () => {},
  },
  {
    onFinish: () => getStimulus(),
  },
];

// eslint-disable-next-line no-unused-vars
const setupFixationTrials = setupFixationData.map((trial, _i) => ({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    return `
                +
              `;
  },
  prompt: () => {
    if (isTouchScreen) {
      return `
              
                
                  
                
                
                  
                
              
           `;
    }

    return ``;
  },
  choices: 'NO_KEYS',
  trial_duration: () => store.session.get('config').timing.fixationTime,
  data: {
    assessment_stage: 'fixation',
  },
  on_finish: trial.onFinish,
}));

export const setupFixationPractice = setupFixationTrials[0];
export const setupFixationTest = setupFixationTrials[1];
