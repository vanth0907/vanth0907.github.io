function qwq() {
    var app = new Vue({
        el: "#app",
        data() {
            return {
                list: [{
                        imgUrl: 'img/t1.png'
                    },
                    {
                        imgUrl: 'img/t2.png'
                    },
                    {
                        imgUrl: 'img/t3.png'
                    },
                    {
                        imgUrl: 'img/t4.png'
                    },
                    {
                        imgUrl: 'img/t5.png'
                    }
                ],
                pressList: [{
                    name: '1',
                    isShow: false
                }, {
                    name: '2',
                    isShow: false
                }, {
                    name: '3',
                    isShow: false
                }, {
                    name: '4',
                    isShow: false
                }, {
                    name: '5',
                    isShow: false
                }],
                numList: ['p0', 'p1', 'p2', 'p3', 'p4'],
                imgIndex: 0,
                imgTimer: null,
                btnShow: false
            }
        },
        mounted: function () {
            var Item = document.getElementsByClassName('item');
            for (var i = 0; i < Item.length; i++) {
                Item[i].className = 'item ' + this.numList[i]
            }
            this.imgMove()
            this.pressList[0].isShow = true
        },
        methods: {

            imgMove() {
                var Item = document.getElementsByClassName('item');
                this.imgTimer = setInterval(() => {
                    this.numList.push(this.numList[0]);
                    this.numList.shift()
                    this.imgIndex++;
                    for (var i = 0; i < Item.length; i++) {
                        Item[i].className = 'item ' + this.numList[i];
                    }
                    for (var i in this.pressList) {
                        this.pressList[i].isShow = false
                    }
                    if (this.imgIndex > 4) {
                        this.imgIndex = 0
                        this.pressList[this.imgIndex].isShow = true;
                    } else {
                        this.pressList[this.imgIndex].isShow = true;
                    }
                }, 2000)
            },
            btnOpen() {
                this.btnShow = true;
                clearInterval(this.imgTimer)
            },
            btnHide() {
                this.btnShow = false;
                this.imgMove()
            },
            leftClick() {
                var Item = document.getElementsByClassName('item');
                this.numList.unshift(this.numList[4]);
                this.numList.pop()
                for (var i = 0; i < Item.length; i++) {
                    Item[i].className = 'item ' + this.numList[i];
                }
                for (var i in this.pressList) {
                    this.pressList[i].isShow = false
                }
                this.imgIndex--
                if (this.imgIndex < 0) {
                    this.imgIndex = 4
                    this.pressList[this.imgIndex].isShow = true;
                } else {
                    this.pressList[this.imgIndex].isShow = true;
                }
            },
            rightClick() {
                var Item = document.getElementsByClassName('item');
                this.numList.push(this.numList[0]);
                this.numList.shift()
                for (var i = 0; i < Item.length; i++) {
                    Item[i].className = 'item ' + this.numList[i];
                }
                for (var i in this.pressList) {
                    this.pressList[i].isShow = false
                }
                this.imgIndex++
                if (this.imgIndex > 4) {
                    this.imgIndex = 0
                    this.pressList[this.imgIndex].isShow = true;
                } else {
                    this.pressList[this.imgIndex].isShow = true;
                }
            }
        }
    })
}