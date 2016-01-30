/**
 * Order structure:
 *  - source
 *  - destination
 *  - element or context
 *  - action
 * 
 * For example event triggered from GUI to Core 
 * when volume has changed should looks like this:
 * EVENT.GUI.CORE.VOLUMERANGE.CHANGE as GUI:CORE:VolumeRange:change
 */

const EVENTS = {}

EVENTS.CORE = {};
EVENTS.GUI = {};

EVENTS.CORE.GUI = {
    PLAYBUTTON: {
        CLICK: 'CORE:GUI:PlayButton:click'
    },

    VOLUMERANGE: {
        CHANGE: 'CORE:GUI:VolumeRange:change',
        DRAG: 'CORE:GUI:VolumeRange:drag',
        CLICK: 'CORE:GUI:VolumeRange:click'
    },

    LOADBUTTON: {
        CLICK: 'CORE:GUI:LoadButton:click'
    },

    PROGRESSBAR: {
        CHANGE: 'CORE:GUI:ProgressBar:change',
        DRAG: 'CORE:GUI:ProgressBar:drag'
    },

    LOADINPUT: {
        KEYPRESSED: 'CORE:GUI:LoadInput:keypressed'
    }
};

EVENTS.GUI.CORE = {
    PLAYBUTTON: {
        CLICK: 'GUI:CORE:playbutton:click'
    },

    VOLUMERANGE: {
        CHANGE: 'GUI:CORE:VolumeRange:change',
        DRAG: 'GUI:CORE:VolumeRange:drag',
        CLICK: 'GUI:CORE:VolumeRange:click'
    },

    LOADBUTTON: {
        CLICK: 'GUI:CORE:LoadButton:click'
    },

    PROGRESSBAR: {
        CHANGE: 'GUI:CORE:ProgressBar:change',
        DRAG: 'GUI:CORE:ProgressBar:drag'
    }
};

export default EVENTS;
