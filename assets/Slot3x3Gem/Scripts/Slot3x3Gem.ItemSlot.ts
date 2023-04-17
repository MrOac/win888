// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class ItemSlot extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;
    @property(sp.Skeleton)
    spine: sp.Skeleton = null;

    @property(sp.SkeletonData)
    aniItem1: sp.SkeletonData = null;
    @property(sp.SkeletonData)
    aniItem2: sp.SkeletonData = null;
    @property(sp.SkeletonData)
    aniItem3: sp.SkeletonData = null;
    @property(sp.SkeletonData)
    aniItem4: sp.SkeletonData = null;
    @property(sp.SkeletonData)
    aniItem5: sp.SkeletonData = null;
    @property(sp.SkeletonData)
    aniItem6: sp.SkeletonData = null;

    @property(cc.SpriteAtlas)
    sprAtlas: cc.SpriteAtlas = null;

    id = 0;
    animName = "";
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    setId(id) {

        id = id + 1;
        this.id = id;
        this.sprite.spriteFrame = this.sprAtlas.getSpriteFrame("icon" + this.id);
        this.spine.node.active = true;
        this.sprite.node.active = false;
        switch (this.id) {
            case 1:
                this.animName = "animation";
                this.spine.skeletonData = this.aniItem1;
                this.spine.animation ="animation";
                this.spine.setAnimation(0, this.animName, true);
                break;
            case 2:
                this.animName = "animation";
                this.spine.skeletonData = this.aniItem2;
                this.spine.animation ="animation";
                this.spine.setAnimation(0, this.animName, true);
                break;
            case 3:
                this.animName = "animation";
                this.spine.skeletonData = this.aniItem3;
                this.spine.animation ="animation";
                this.spine.setAnimation(0, this.animName, true);
                break;
            case 4:
                this.animName = "animation";
                this.spine.skeletonData = this.aniItem4;
                this.spine.animation ="animation";
                this.spine.setAnimation(0, this.animName, true);
                break;
            case 5:
                this.animName = "animation";
                this.spine.skeletonData = this.aniItem5;
                this.spine.animation ="animation";
                this.spine.setAnimation(0, this.animName, true);
                break;
            case 6:
                this.animName = "animation";
                this.spine.skeletonData = this.aniItem6;
                this.spine.animation ="animation";
                this.spine.setAnimation(0, this.animName, true);
                break;
        }

    }
    setBlur() {
        this.sprite.spriteFrame = this.sprAtlas.getSpriteFrame("icon" + (this.id + 1) + "_blur");
        this.spine.node.active = false;
        this.sprite.node.active = true;
    }

    // update (dt) {}
}
