import AudioMultiResponsePlugin from '@jspsych-contrib/plugin-audio-multi-response';
import store from 'store2';
import i18next from 'i18next';
import '../i18n';
import { isTouchScreen } from '../experimentSetup';
import { mediaAssets } from '../experiment';

const introTrialsContent = [
  {
    stimulus: () => {
      if (store.session.get('config').story) {
        return mediaAssets.audio.intro1;
      }
      return mediaAssets.audio.intro1Ns;
    },
    prompt: () => {
      if (store.session.get('config').story) {
        return `${i18next.t('introTrials.trial1.header1')}
        
        
        
        
        
        ${i18next.t('introTrials.trial1.paragraph1')}
        ${i18next.t('introTrials.trial1.paragraph2')}
        
        
        ${
          !isTouchScreen
            ? `${i18next.t('navigation.continueButtonText', {
                action: `${i18next.t('terms.continue')}`,
              })}`
            : ''
        }`;
      }
      return `${i18next.t('introTrials.trial1.header2')}
        ${i18next.t('introTrials.trial1.paragraph3')}
        ${i18next.t('introTrials.trial1.paragraph4')}
        
        ${
          !isTouchScreen
            ? `${i18next.t('navigation.continueButtonText', {
                action: `${i18next.t('terms.continue')}`,
              })} `
            : ''
        }`;
    },
  },
  {
    stimulus: () => {
      if (store.session.get('config').story) {
        return mediaAssets.audio.intro2;
      }
      return mediaAssets.audio.intro2Ns;
    },
    prompt: () => `
    ${i18next.t('introTrials.trial2.header')}
    
      
        ${i18next.t('introTrials.trial2.paragraph1')}
      
      
        ${i18next.t('introTrials.trial2.paragraph2')}
      
    
    
      
        
      
      
        
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })}`
        : ''
    }`,
  },
  {
    stimulus: () => {
      if (store.session.get('config').story) {
        return mediaAssets.audio.intro3;
      }
      return mediaAssets.audio.intro3Ns;
    },
    prompt: () => `
    ${i18next.t('introTrials.trial3.header')}
    
      
      ${i18next.t('introTrials.trial3.paragraph1')}
      ${i18next.t('introTrials.trial3.paragraph2')}
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.practice')}`,
          })}`
        : ''
    }`,
  },
];

const introTrialsMapped = introTrialsContent.map((trial, i) => ({
  type: AudioMultiResponsePlugin,
  stimulus: trial.stimulus,
  keyboard_choices: () => (isTouchScreen ? 'NO_KEYS' : 'ALL_KEYS'),
  button_choices: () => (isTouchScreen ? ['HERE'] : []),
  button_html: () =>
    `${i18next.t('navigation.continueButtonTextMobile', {
      action: `${isTouchScreen && i === 2 ? i18next.t('terms.practice') : i18next.t('terms.continue')}`,
    })}`,
  response_allowed_while_playing: () => store.session.get('config').skipInstructions,
  prompt: trial.prompt,
  prompt_above_buttons: true,
  on_start: () => {
    if (i === 0) document.body.style.cursor = 'none';
  },
}));

export const introductionTrials = {
  timeline: [...introTrialsMapped],
};

export const postPracticeIntro = {
  type: AudioMultiResponsePlugin,
  stimulus: () => {
    if (store.session.get('config').story) {
      return mediaAssets.audio.coinIntro;
    }
    return mediaAssets.audio.postPracticeNs;
  },
  keyboard_choices: () => (isTouchScreen ? 'NO_KEYS' : 'ALL_KEYS'),
  button_choices: () => (isTouchScreen ? ['HERE'] : []),
  button_html: () =>
    `${i18next.t('navigation.continueButtonTextMobile', {
      action: `${i18next.t('terms.begin')}`,
    })}`,
  response_allowed_while_playing: () => store.session.get('config').skipInstructions,
  prompt: () => {
    if (store.session.get('config').story) {
      return `${i18next.t('introTrials.postPracticeTrial.header1')} 
      ${i18next.t('introTrials.postPracticeTrial.paragraph1')}
      
      
      ${
        !isTouchScreen
          ? `${i18next.t('navigation.continueButtonText', {
              action: `${i18next.t('terms.begin')}`,
            })}`
          : ''
      }`;
    }
    return `${i18next.t('introTrials.postPracticeTrial.header2')}
    ${i18next.t('introTrials.postPracticeTrial.paragraph2')}
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })}`
        : ''
    }`;
  },
  prompt_above_buttons: true,
};
