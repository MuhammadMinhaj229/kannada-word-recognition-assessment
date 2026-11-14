import AudioMultiResponsePlugin from '@jspsych-contrib/plugin-audio-multi-response';
import store from 'store2';
import i18next from 'i18next';
import '../i18n';
import { isTouchScreen } from '../experimentSetup';
import { mediaAssets } from '../experiment';

const midBlockTrialsContent = [
  {
    stimulus: () => {
      if (store.session.get('config').story) {
        return mediaAssets.audio.midBlock1;
      }
      return mediaAssets.audio.midBlock1Ns;
    },
    prompt: () => {
      if (store.session.get('config').story) {
        return `
      
        ${i18next.t('gameBreakTrials.midBlockTrials.trial1.header1')}
        
          ${i18next.t(
            'gameBreakTrials.midBlockTrials.trial1.paragraph1',
          )}
          ${i18next.t(
            'gameBreakTrials.midBlockTrials.trial1.paragraph2',
          )}  
        
        
          
          
        
      
      ${
        !isTouchScreen
          ? `${i18next.t('navigation.continueButtonText', {
              action: `${i18next.t('terms.continue')}`,
            })}`
          : ''
      }`;
      }
      return `${i18next.t('gameBreakTrials.midBlockTrials.trial1.header2')}
    ${i18next.t('gameBreakTrials.midBlockTrials.trial1.paragraph3')}
    ${i18next.t('gameBreakTrials.midBlockTrials.trial1.paragraph4')}
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })}`
        : ''
    }`;
    },
  },
  {
    stimulus: () => {
      if (store.session.get('config').story) {
        return mediaAssets.audio.midBlock2;
      }
      return mediaAssets.audio.midBlock2Ns;
    },
    prompt: () => {
      if (store.session.get('config').story) {
        return `
        
        ${i18next.t('gameBreakTrials.midBlockTrials.trial2.header1')}
        
        ${i18next.t(
          'gameBreakTrials.midBlockTrials.trial2.paragraph1',
        )}
        ${i18next.t(
          'gameBreakTrials.midBlockTrials.trial2.paragraph2',
        )}
      
      
        
        
        
      
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })}`
        : ''
    }`;
      }
      return `${i18next.t('gameBreakTrials.midBlockTrials.trial2.header2')}
    ${i18next.t('gameBreakTrials.midBlockTrials.trial2.paragraph3')}
    ${i18next.t('gameBreakTrials.midBlockTrials.trial2.paragraph4')}
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })}`
        : ''
    }`;
    },
  },
  {
    stimulus: () => {
      if (store.session.get('config').story) {
        return mediaAssets.audio.midBlock3;
      }
      return mediaAssets.audio.midBlock3Ns;
    },
    prompt: () => {
      if (store.session.get('config').story) {
        return `
      ${i18next.t('gameBreakTrials.midBlockTrials.trial3.header1')}
      
          ${i18next.t(
            'gameBreakTrials.midBlockTrials.trial3.paragraph1',
          )}
          ${i18next.t(
            'gameBreakTrials.midBlockTrials.trial3.paragraph2',
          )}
      
      
        
        
        
        
      
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })}`
        : ''
    }`;
      }
      return `${i18next.t('gameBreakTrials.midBlockTrials.trial3.header2')}
    ${i18next.t('gameBreakTrials.midBlockTrials.trial3.paragraph3')}
    ${i18next.t('gameBreakTrials.midBlockTrials.trial3.paragraph4')}
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })}`
        : ''
    }`;
    },
  },
];

// eslint-disable-next-line no-unused-vars
const midBlockTrialsMapped = midBlockTrialsContent.map((trial, _i) => ({
  type: AudioMultiResponsePlugin,
  stimulus: trial.stimulus,
  keyboard_choices: () => (isTouchScreen ? 'NO_KEYS' : 'ALL_KEYS'),
  button_choices: () => (isTouchScreen ? ['HERE'] : []),
  button_html: () =>
    `${i18next.t('navigation.continueButtonTextMobile', {
      action: `${i18next.t('terms.continue')}`,
    })}`,
  response_allowed_while_playing: () => store.session.get('config').skipInstructions,
  prompt: trial.prompt,
  prompt_above_buttons: true,
}));

const midBlockPageList = [...midBlockTrialsMapped];

// post block page

const postBlockTrialsContent = [
  {
    stimulus: () => {
      if (store.session.get('config').story) {
        return mediaAssets.audio.endBlock1;
      }
      return mediaAssets.audio.endBlock1Ns;
    },
    prompt: () => {
      if (store.session.get('config').story) {
        return `
        
        ${i18next.t('gameBreakTrials.postBlockTrials.trial1.header1')}
        
        ${i18next.t(
          'gameBreakTrials.postBlockTrials.trial1.paragraph1',
        )} 
        ${i18next.t('gameBreakTrials.postBlockTrials.trial1.paragraph2')}
      
      
        
        
        
      
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })}`
        : ''
    }`;
      }
      return `${i18next.t('gameBreakTrials.postBlockTrials.trial1.header2')}
    ${i18next.t('gameBreakTrials.postBlockTrials.trial1.paragraph3')}
    ${i18next.t('gameBreakTrials.postBlockTrials.trial1.paragraph4')}
    
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
        return mediaAssets.audio.endBlock2;
      }
      return mediaAssets.audio.endBlock2Ns;
    },
    prompt: () => {
      if (store.session.get('config').story) {
        return `
        
      ${i18next.t('gameBreakTrials.postBlockTrials.trial2.header1')}
      
        ${i18next.t(
          'gameBreakTrials.postBlockTrials.trial2.paragraph1',
        )}

        ${i18next.t('gameBreakTrials.postBlockTrials.trial2.paragraph2')}
      
      
        
        
        
      
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })}`
        : ''
    }`;
      }
      return `${i18next.t('gameBreakTrials.postBlockTrials.trial2.header2')}
    ${i18next.t('gameBreakTrials.postBlockTrials.trial2.paragraph3')}
    ${i18next.t('gameBreakTrials.postBlockTrials.trial2.paragraph4')}
    
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
        return mediaAssets.audio.endBlock1;
      }
      return mediaAssets.audio.endBlockGeneralNs;
    },
    prompt: () => {
      if (store.session.get('config').story) {
        return `
        
       ${i18next.t('gameBreakTrials.postBlockTrials.trial3.header1')}
      
        ${i18next.t(
          'gameBreakTrials.postBlockTrials.trial3.paragraph1',
        )}

        ${i18next.t('gameBreakTrials.postBlockTrials.trial3.paragraph2')}
      
      
        
        
        
      
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })}`
        : ''
    }`;
      }
      return `${i18next.t('gameBreakTrials.postBlockTrials.trial3.header2')}
    ${i18next.t('gameBreakTrials.postBlockTrials.trial3.paragraph3')}
    ${i18next.t('gameBreakTrials.postBlockTrials.trial3.paragraph4')}
    
    ${
      !isTouchScreen
        ? `${i18next.t('navigation.continueButtonText', {
            action: `${i18next.t('terms.continue')}`,
          })} `
        : ''
    }`;
    },
  },
];

const postBlockTrialsMapped = postBlockTrialsContent.map((trial) => ({
  type: AudioMultiResponsePlugin,
  stimulus: trial.stimulus,
  keyboard_choices: () => (isTouchScreen ? 'NO_KEYS' : 'ALL_KEYS'),
  button_choices: () => (isTouchScreen ? ['HERE'] : []),
  button_html: () =>
    `${i18next.t('navigation.continueButtonTextMobile', {
      action: `${i18next.t('terms.continue')}`,
    })}`,
  response_allowed_while_playing: () => store.session.get('config').skipInstructions,
  prompt: trial.prompt,
  prompt_above_buttons: true,
}));

const postBlockPageList = [...postBlockTrialsMapped];

const finalPage = {
  type: AudioMultiResponsePlugin,
  stimulus: () => {
    if (store.session.get('config').story) {
      return mediaAssets.audio.endGame;
    }
    return mediaAssets.audio.endGameNs;
  },
  keyboard_choices: () => (isTouchScreen ? 'NO_KEYS' : 'ALL_KEYS'),
  button_choices: () => (isTouchScreen ? ['HERE'] : []),
  button_html: () =>
    `${i18next.t('navigation.continueButtonTextMobile', {
      action: `${i18next.t('terms.save')}`,
    })}`,
  response_allowed_while_playing: () => store.session.get('config').skipInstructions,
  prompt_above_buttons: true,
  prompt: () => {
    if (store.session.get('config').story) {
      return `
      
      ${i18next.t('gameBreakTrials.finalTrial.header1')}
      
      ${i18next.t('gameBreakTrials.finalTrial.paragraph1')}
      ${i18next.t('gameBreakTrials.finalTrial.paragraph2')}
      
      
      
      
      
    
  
  ${
    !isTouchScreen
      ? `${i18next.t('navigation.continueButtonText', {
          action: `${i18next.t('terms.save')}`,
        })}`
      : ''
  }`;
    }
    return `${i18next.t('gameBreakTrials.finalTrial.header2')}
  ${i18next.t('gameBreakTrials.finalTrial.paragraph3')}
  ${i18next.t('gameBreakTrials.finalTrial.paragraph4')}
  
  ${
    !isTouchScreen
      ? `${i18next.t('navigation.continueButtonText', {
          action: `${i18next.t('terms.save')}`,
        })}`
      : ''
  }`;
  },
  on_finish: function () {
    document.body.style.cursor = 'auto';
  },
};

export { midBlockPageList, postBlockPageList, finalPage };
