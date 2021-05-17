let tl = gsap.timeline();

tl.to(".slider h2", {
	y: -30,
	duration: 1,
});

tl.from(".slider p", {
	x: 1000,
});

tl.to(
	".slider",
	{
		y: "-100%",
		duration: 1,
		ease: Expo.easeInOut,
	},
	"+=1"
);

tl.from(".small-circle1-container", {
	opacity: 0,
});

tl.from(
	".small-circle2-container2",
	{
		opacity: 0,
	},
	"-=0.5"
);

tl.from(".inside-circle", {
	opacity: 0,
});

tl.from(".title", {
	y: "-100%",
	ease: Expo.easeInOut,
});

tl.from(
	".visit",
	{
		x: "100%",
		ease: Expo.easeInOut,
	},
	"-=0.5"
);

gsap.from(
	".links li",
	{
		x: "-100%",
		opacity: 0,
		stagger: 0.1,
		delay: 4.5,
		ease: Expo.easeInOut,
	},
	"-=0.5"
);

gsap.from(
	".icons li",
	{
		y: "100%",
		opacity: 0,
		stagger: 0.1,
		delay: 4.5,
		ease: Expo.easeInOut,
	},
	"-=0.5"
);

tl.from(
	".big-title",
	{
		x: "150%",
		opacity: 0,
		ease: Expo.easeInOut,
	},
	"-=0.5"
);

tl.from(
	".indicate",
	{
		x: "-150%",
		opacity: 0,
		ease: Expo.easeInOut,
	},
	"-=0.5"
);
console.log("working");
