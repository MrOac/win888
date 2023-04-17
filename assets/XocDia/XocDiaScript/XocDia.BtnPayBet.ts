import Utils from "../../Lobby/LobbyScript/Script/common/Utils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class BtnPayBet extends cc.Component {

    @property(cc.Label)
    lblTotalBet: cc.Label = null;
    @property(cc.Node)
    active: cc.Node = null;
    @property(cc.Label)
    lblBet: cc.Label = null;

    totalPlayerBet : number = 0;

    public reset() {
        this.totalPlayerBet = 0;
        this.lblTotalBet.string = "";
        this.lblBet.string = "";
        this.active.active = false;
    }

    public setTotalBet(coin: number) {
        this.lblTotalBet.string = coin > 0 ? Utils.formatMoney(coin) : "";
    }
    public setPlayerBet (coin: number){
        this.totalPlayerBet += coin;
        this.lblBet.string = this.totalPlayerBet > 0 ? Utils.formatMoney(this.totalPlayerBet) : "";
    }
}
