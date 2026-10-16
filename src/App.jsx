import { useState } from "react";
import { IceCream, MapPin, Clock, Footprints, Heart } from "lucide-react";

export default function App() {
	const [accepted, setAccepted] = useState(false);
	const [noPosition, setNoPosition] = useState(null);

	function moveNoButton() {
		const x = Math.random() * Math.max(0, window.innerWidth - 100);
		const y = Math.random() * Math.max(0, window.innerHeight - 50);

		setNoPosition({ left: `${x}px`, top: `${y}px` });
	}

	return (
		<main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-orange-100 p-5">
			<section className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
				{!accepted ? (
					<>
						<div className="mb-5 text-6xl">🍦</div>

						<p className="mb-3 text-sm font-bold uppercase tracking-widest text-pink-500">
							A very important question
						</p>

						<h1 className="text-3xl font-black leading-tight text-gray-800">
							Will you go on an
							<span className="block text-pink-500">ice cream date</span>
							with me? 💗
						</h1>

						<p className="mt-4 text-gray-500">
							Just you, me, something sweet, and a little walk together.
						</p>

						<div className="mt-8 flex items-center justify-center gap-4">
							<button
								onClick={() => setAccepted(true)}
								className="rounded-full bg-pink-500 px-9 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-pink-600">
								YES! 💖
							</button>

							<button
								onMouseEnter={moveNoButton}
								onTouchStart={moveNoButton}
								onClick={moveNoButton}
								style={
									noPosition
										? {
												position: "fixed",
												left: noPosition.left,
												top: noPosition.top,
												zIndex: 50,
											}
										: {}
								}
								className="rounded-full border-2 border-gray-200 bg-white px-8 py-3 font-semibold text-gray-500">
								No 🙃
							</button>
						</div>

						<p className="mt-8 text-xs text-gray-400">
							P.S. The YES button is looking pretty cute right now.
						</p>
					</>
				) : (
					<>
						<div className="mb-4 text-6xl">🥰</div>

						<p className="text-sm font-bold uppercase tracking-widest text-pink-500">
							Officially a date!
						</p>

						<h1 className="mt-2 text-3xl font-black text-gray-800">
							You said YES! 💕
						</h1>

						<p className="mt-3 text-gray-500">
							Here's our little adventure plan.
						</p>

						<div className="mt-7 space-y-4 text-left">
							<div className="flex gap-4 rounded-2xl bg-pink-50 p-4">
								<Clock className="shrink-0 text-pink-500" />
								<div>
									<h2 className="font-bold text-gray-800">1. Pick a time</h2>
									<p className="text-sm text-gray-600">
										We'll agree on a day and time that works for both of us.
									</p>
								</div>
							</div>

							<div className="flex gap-4 rounded-2xl bg-orange-50 p-4">
								<IceCream className="shrink-0 text-orange-500" />
								<div>
									<h2 className="font-bold text-gray-800">2. Ice cream time</h2>
									<p className="text-sm text-gray-600">
										We get our favourite ice cream and enjoy it together.
									</p>
								</div>
							</div>

							<div className="flex gap-4 rounded-2xl bg-pink-50 p-4">
								<MapPin className="shrink-0 text-pink-500" />
								<div>
									<h2 className="font-bold text-gray-800">3. KFC stop</h2>
									<p className="text-sm text-gray-600">
										We'll walk to KFC, grab something to eat if we feel like it,
										then head back together.
									</p>
								</div>
							</div>

							<div className="flex gap-4 rounded-2xl bg-orange-50 p-4">
								<Footprints className="shrink-0 text-orange-500" />
								<div>
									<h2 className="font-bold text-gray-800">4. Walk back</h2>
									<p className="text-sm text-gray-600">
										We'll walk back towards your place, chatting and enjoying
										each other's company. I'll walk you home if you'd like.
									</p>
								</div>
							</div>
						</div>

						<div className="mt-6 rounded-2xl bg-pink-500 p-5 text-white">
							<Heart className="mx-auto mb-2" fill="currentColor" />
							<p className="font-bold">The real plan?</p>
							<p className="mt-1 text-sm">
								Spending time with you. The ice cream is just a bonus. 💗
							</p>
						</div>

						<button
							onClick={() => {
								const phoneNumber = "27670295575"; // Replace with the actual WhatsApp number
								const message = encodeURIComponent(
									"I said YES to the ice cream date! 🍦💕 Let's choose a day and time.",
								);

								window.open(
									`https://wa.me/${phoneNumber}?text=${message}`,
									"_blank",
								);
							}}
							className="mt-5 w-full rounded-full bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-600">
							Send me the date details 💌
						</button>
					</>
				)}
			</section>
		</main>
	);
}
