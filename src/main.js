import kaboom from "kaboom"

const ctx = kaboom({
	global: false,
	canvas: document.getElementById("game"),
})

// k.loadSprite("bean", "sprites/bean.png")
ctx.loadSprite("mc", "assets/mc/base.png", {
	sliceX: 7,
	sliceY: 4,
	anims: {
		// idle: { from: 0, to: 3 },
		// run: { from: 4, to: 7 },
		// jump: { from: 8, to: 11 },
		run_forward: { from: 0, to: 8 },
		run_left: { from: 9, to: 16 },
		run_right: { from: 17, to: 24 },
		run_back: { from: 25, to: 32 },
	},
})
ctx.loadRoot("assets/")
const mc = ctx.sprite("mc")
ctx.add([
	ctx.pos(120, 80),
	mc,
])
setTimeout(() => {
	mc.play("run_forward")
}, 1000)
ctx.onClick(() => ctx.addKaboom(ctx.mousePos()))