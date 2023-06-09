export namespace ShanContants {

}
export const Constant ={
    SHANKOEMEE_LOCAL_TEST: false,

    SHANKOEMEE_MAX_PLAYER: 7,

    SHANKOEMEE_CHIP_VALUES: [1, 5, 10, 50, 100, 200],
    SHANKOEMEE_CHIP_THROW_MIN: 2,
    SHANKOEMEE_CHIP_STACK_MAX: 10,

    CARD_SELECTED_Y_OFFSET: 15,

    SHANKOEMEE_CARD_ON_HAND_SCALE: 1.32,
    SHANKOEMEE_CARD_ON_DECK_SCALE: 1.1,
    SHANKOEMEE_CARD_DEALING_SCALE: 0.8,

    SHANKOEMEE_CARD_ON_HAND_GAP: 20,
    SHANKOEMEE_CARD_ON_HAND_Y_OFFSET: 0,
    SHANKOEMEE_CARD_BASE_Z_ORDER: 11,

    SHANKOEMEE_EVENT_DEALING_FINISH: "shankoemee_event_dealing_finish",

    SHANKOEMEE_CARD_GROUP_STATUS_FONT_SIZE: 24,
    SELF_PLAYER_FONT_SIZE: cc.sys.isNative ? 24 : 40,

    SHANKOEMEE_QUICK_CHAT_SIZE: 12,
    SHANKOEMEE_CHAT_LINE_HEIGHT: 40,

    SHANKOEMEE_ROTATION_CARD: [[10, -10], [20, 0, -20]],
    // SHANKOEMEE_POS_X_CARD: [[30, 70], [10, 50, 90]],
    SHANKOEMEE_POS_Y_CARD: [[0, 0], [0, 0, -5]],
    SHANKOEMEE_MIN_NUM_CARD: 2,

    SHANKOEMEE_ALERT_Z_INDEX: 15,
    SHANKOEMEE_CHIPNODE_Z_INDEX: 10,
    SHANKOEMEE_MUTILPLE_Z_INDEX: 12,
    SHANKOEMEE_WAITOPEN_Z_INDEX: 12,
    SHANKOEMEE_CARD_Z_INDEX: 11,
    SHANKOEMEE_POINTNODE_Z_INDEX: 12,
    SHANKOEMEE_USERNODE_Z_INDEX: 1,
}
export const ConnectionState = {
    NO_CONNECTION: 0,
    CLOSING: 1,
    CONNECTING: 2,
    CONNECTED: 3
}
export const DealerAction = {
    IDLE: "idle",
    CHIA_BAI: "chia_bai",
    KISS: 'idle_honmoi',
    FUN: 'fun',
    ANGRY: 'angry',
    HEART: "heart"
}
export const SHAN_WIN_TYPE = {
    DRAW: 0,
    LOSE: 1,
    WIN: 2
}
export default ShanContants;