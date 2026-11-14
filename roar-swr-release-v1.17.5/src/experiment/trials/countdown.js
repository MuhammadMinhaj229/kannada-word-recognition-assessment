import jsPsychAudioKeyboardResponse from '@jspsych/plugin-audio-keyboard-response';
import { isTouchScreen } from '../experimentSetup';
import { mediaAssets } from '../experiment';

const countDownData = [{ count: 3 }, { count: 2 }, { count: 1 }, { count: 0 }];

const countDownTrials = countDownData.map((trial) => ({
  type: jsPsychAudioKeyboardResponse,
  stimulus: () => mediaAssets.audio[`countdown${trial.count}`],
  prompt: () => `
  
    
      ${trial.count}
    
    
    ${
      isTouchScreen
        ? `
          
            
          
          
            
          
        `
        : ``
    }
  `,
  choices: 'NO_KEYS',
  trial_duration: 1000,
  data: {
    assessment_stage: 'countdown',
  },
}));

export const countdownTrials = {
  timeline: countDownTrials,
};
