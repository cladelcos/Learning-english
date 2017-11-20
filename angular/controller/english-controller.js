english.controller("generalCtrl", function ($scope) {
	folderCover = function (fold, band, album) {
		if(fold == "side") {
			fold = "./data/image/cover-side/";
			if (band == "lp") {
				band = "linkin-park-";
				if(album == "brwmi") {
					album = "ft-busta-rhymes-we-made-it.png";
				}
				if(album == "ht") {
					album = "hybrid-theory.png";
				}
				if(album == "htep") {
					album = "hybrid-theory-ep.png";
				}
				if(album == "mtm") {
					album = "minutes-to-midnight.png";
				}
				if(album == "ats") {
					album = "a-thousand-suns.png";
				}
				if(album == "meteora") {
					album = "meteora.png";
				}
				if(album == "lt") {
					album = "living-things.png";
				}
				if(album == "oml") {
					album = "one-more-light.png";
				}
				if(album == "thp") {
					album = "the-hunting-party.png";
				}
			}
			if (band == "audioslave") {
				band = "audioslave";
				if(album == "audioslave") {
					album = ".png";
				}
			}
			if (band == "fm") {
				band = "fort-minor-";
				if(album == "trt") {
					album = "the-rising-tied.png";
				}
			}
			fold += band + album;
			return fold;
		}
		if(fold == "front") {
			fold = "./data/image/cover-front/";
			if (band == "lp") {
				band = "linkin-park-";
				if(album == "brwmi") {
					album = "ft-busta-rhymes-we-made-it.png";
				}
				if(album == "blackbirds") {
					album = "blackbirds-single.png";
				}
				if(album == "htep") {
					album = "hybrid-theory-ep.png";
				}
				if(album == "mtm") {
					album = "minutes-to-midnight.png";
				}
				if(album == "ats") {
					album = "a-thousand-suns.png";
				}
				if(album == "meteora") {
					album = "meteora.png";
				}
				if(album == "lt") {
					album = "living-things.png";
				}
				if(album == "oml") {
					album = "one-more-light.png";
				}
				if(album == "thp") {
					album = "the-hunting-party.png";
				}
			}
			if (band == "audioslave") {
				band = "audioslave";
				if(album == "audioslave") {
					album = ".png";
				}
			}
			if (band == "fm") {
				band = "fort-minor-";
				if(album == "trt") {
					album = "the-rising-tied.png";
				}
			}
			fold += band + album;
			return fold;
		}
		if(fold == "back") {
			fold = "./data/image/cover-back/";
			if (band == "lp") {
				band = "linkin-park-";
				if(album == "brwmi") {
					album = "ft-busta-rhymes-we-made-it.png";
				}
				if(album == "blackbirds") {
					album = "blackbirds-single.png";
				}
				if(album == "htep") {
					album = "hybrid-theory-ep.png";
				}
				if(album == "mtm") {
					album = "minutes-to-midnight.png";
				}
				if(album == "ats") {
					album = "a-thousand-suns.png";
				}
				if(album == "meteora") {
					album = "meteora.png";
				}
				if(album == "lt") {
					album = "living-things.png";
				}
				if(album == "oml") {
					album = "one-more-light.png";
				}
				if(album == "thp") {
					album = "the-hunting-party.png";
				}
			}
			if (band == "audioslave") {
				band = "audioslave";
				if(album == "audioslave") {
					album = ".png";
				}
			}
			if (band == "fm") {
				band = "fort-minor-";
				if(album == "trt") {
					album = "the-rising-tied.png";
				}
			}
			fold += band + album;
			return fold;
		}
	}
	$scope.lyric = [{band: "Linkin Park", featuringBand: "feat. Busta Rhymes", songName: "We Made It", url: "https://genius.com/Busta-rhymes-we-made-it-lyrics", coverFrontSong: folderCover("front", "lp", "brwmi"), coverSideSong: folderCover("side", "lp", "brwmi"), coverBackSong: folderCover("back", "lp", "brwmi"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Blackbirds", url: "https://www.azlyrics.com/lyrics/linkinpark/blackbirds.html", coverFrontSong: folderCover("front","lp","blackbirds"), coverSideSong: folderCover("side", "lp", "ht"),  coverBackSong:  folderCover("back", "lp", "blackbirds"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "High Voltage", url: "https://www.azlyrics.com/lyrics/linkinpark/highvoltage.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"),coverBackSong: folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Carousel", url: "https://www.azlyrics.com/lyrics/linkinpark/carousel.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Papercut", url: "https://www.azlyrics.com/lyrics/linkinpark/papercut.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "One Step Closer", url: "https://www.azlyrics.com/lyrics/linkinpark/onestepcloser.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "With You", url: "https://www.azlyrics.com/lyrics/linkinpark/withyou.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Points Of Authority", url: "https://www.azlyrics.com/lyrics/linkinpark/pointsofauthority.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Crawling", url: "https://www.azlyrics.com/lyrics/linkinpark/crawling.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Runaway", url: "https://www.azlyrics.com/lyrics/linkinpark/runaway.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "By Myself", url: "https://www.azlyrics.com/lyrics/linkinpark/bymyself.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "In The End", url: "https://www.azlyrics.com/lyrics/linkinpark/intheend.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "A Place For My Head", url: "https://www.azlyrics.com/lyrics/linkinpark/aplaceformyhead.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Forgotten", url: "https://www.azlyrics.com/lyrics/linkinpark/forgotten.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Cure For The Itch", url: "https://www.azlyrics.com/lyrics/linkinpark/curefortheitch.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Pushing Me Away", url: "https://www.azlyrics.com/lyrics/linkinpark/pushingmeaway.html", coverFrontSong: folderCover("front", "lp", "htep"), coverSideSong: folderCover("side", "lp", "htep"), coverBackSong:  folderCover("back", "lp", "htep"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Leave Out All The Rest", url: "https://www.azlyrics.com/lyrics/linkinpark/leaveoutalltherest.html", coverFrontSong: folderCover("front", "lp", "mtm"), coverSideSong: folderCover("side", "lp", "mtm"), coverBackSong: folderCover("back", "lp", "mtm"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Bleed It Out", url: "https://www.azlyrics.com/lyrics/linkinpark/bleeditout.html", coverFrontSong: folderCover("front", "lp", "mtm"), coverSideSong: folderCover("side", "lp", "mtm"), coverBackSong: folderCover("back", "lp", "mtm"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Shadow Of The Day", url: "https://www.azlyrics.com/lyrics/linkinpark/shadowoftheday.html", coverFrontSong: folderCover("front", "lp", "mtm"), coverSideSong: folderCover("side", "lp", "mtm"), coverBackSong: folderCover("back", "lp", "mtm"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "What I've Done", url: "https://www.azlyrics.com/lyrics/linkinpark/whativedone.html", coverFrontSong: folderCover("front", "lp", "mtm"), coverSideSong: folderCover("side", "lp", "mtm"), coverBackSong: folderCover("back", "lp", "mtm"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "No More Sorrow", url: "https://www.azlyrics.com/lyrics/linkinpark/nomoresorrow.html", coverFrontSong: folderCover("front", "lp", "mtm"), coverSideSong: folderCover("side", "lp", "mtm"), coverBackSong: folderCover("back", "lp", "mtm"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Valentine's Day", url: "https://www.azlyrics.com/lyrics/linkinpark/valentinesday.html", coverFrontSong: folderCover("front", "lp", "mtm"), coverSideSong: folderCover("side", "lp", "mtm"), coverBackSong: folderCover("back", "lp", "mtm"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Don't Stay", url: "https://www.azlyrics.com/lyrics/linkinpark/dontstay.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Somewhere I Belong", url: "https://www.azlyrics.com/lyrics/linkinpark/somewhereibelong.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Lying From You", url: "https://www.azlyrics.com/lyrics/linkinpark/lyingfromyou.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Hit The Floor", url: "https://www.azlyrics.com/lyrics/linkinpark/hitthefloor.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Easier To Run", url: "https://www.azlyrics.com/lyrics/linkinpark/easiertorun.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Faint", url: "https://www.azlyrics.com/lyrics/linkinpark/faint.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Figure.09", url: "https://www.azlyrics.com/lyrics/linkinpark/figure09.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Breaking The Habit", url: "https://www.azlyrics.com/lyrics/linkinpark/breakingthehabit.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "From The Inside", url: "https://www.azlyrics.com/lyrics/linkinpark/fromtheinside.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Nobody's Listening", url: "https://genius.com/Linkin-park-nobodys-listening-lyrics", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Session", url: "http://www.metrolyrics.com/session-lyrics-linkin-park.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Numb", url: "https://www.azlyrics.com/lyrics/linkinpark/numb.html", coverFrontSong: folderCover("front", "lp", "meteora"), coverSideSong: folderCover("side", "lp", "meteora"), coverBackSong: folderCover("back", "lp", "meteora"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Waiting For The End", url: "https://www.azlyrics.com/lyrics/linkinpark/waitingfortheend.html", coverFrontSong: folderCover("front", "lp", "ats"), coverSideSong: folderCover("side", "lp", "ats"), coverBackSong: folderCover("back", "lp", "ats"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Blackout", url: "https://www.azlyrics.com/lyrics/linkinpark/blackout.html", coverFrontSong: folderCover("front", "lp", "ats"), coverSideSong: folderCover("side", "lp", "ats"), coverBackSong: folderCover("back", "lp", "ats"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Wretches And Kings", url: "https://www.azlyrics.com/lyrics/linkinpark/wretchesandkings.html", coverFrontSong: folderCover("front", "lp", "ats"), coverSideSong: folderCover("side", "lp", "ats"), coverBackSong: folderCover("back", "lp", "ats"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Wisdom, Justice And Love", url: "https://www.azlyrics.com/lyrics/linkinpark/wisdomjusticeandlove.html", coverFrontSong: folderCover("front", "lp", "ats"), coverSideSong: folderCover("side", "lp", "ats"), coverBackSong: folderCover("back", "lp", "ats"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Iridescent", url: "https://www.azlyrics.com/lyrics/linkinpark/iridescent.html", coverFrontSong: folderCover("front", "lp", "ats"), coverSideSong: folderCover("side", "lp", "ats"), coverBackSong: folderCover("back", "lp", "ats"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Fallout", url: "https://www.azlyrics.com/lyrics/linkinpark/fallout.html", coverFrontSong: folderCover("front", "lp", "ats"), coverSideSong: folderCover("side", "lp", "ats"), coverBackSong: folderCover("back", "lp", "ats"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Catalyst", url: "https://www.azlyrics.com/lyrics/linkinpark/thecatalyst.html", coverFrontSong: folderCover("front", "lp", "ats"), coverSideSong: folderCover("side", "lp", "ats"), coverBackSong: folderCover("back", "lp", "ats"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Burn It Down", url: "https://www.azlyrics.com/lyrics/linkinpark/burnitdown.html", coverFrontSong: folderCover("front", "lp", "lt"), coverSideSong: folderCover("side", "lp", "lt"), coverBackSong: folderCover("back", "lp", "lt"), genreMusicalBand:"metal"},
					// {band: "Linkin Park", featuringBand: "", songName: "Keys To The Kingdom", url: "", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					// {band: "Linkin Park", featuringBand: "", songName: "All For Nothing", url: "", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Guilty All The Same", url: "https://genius.com/Linkin-park-guilty-all-the-same-lyrics", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					// {band: "Linkin Park", featuringBand: "", songName: "The Summoning", url: "", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					// {band: "Linkin Park", featuringBand: "", songName: "War", url: "", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					// {band: "Linkin Park", featuringBand: "", songName: "Wastelands", url: "", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					// {band: "Linkin Park", featuringBand: "", songName: "Until It's Gone", url: "", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					// {band: "Linkin Park", featuringBand: "", songName: "Rebellion", url: "", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					// {band: "Linkin Park", featuringBand: "", songName: "Mark The Graves", url: "", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					// {band: "Linkin Park", featuringBand: "", songName: "Drawbar", url: "", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Final Masquerade", url: "https://www.azlyrics.com/lyrics/linkinpark/finalmasquerade.html", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					// {band: "Linkin Park", featuringBand: "", songName: "A Line In The Sand", url: "", coverFrontSong: folderCover("front", "lp", "thp"), coverSideSong: folderCover("side", "lp", "thp"), coverBackSong: folderCover("back", "lp", "thp"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Nobody Can Save Me ", url: "https://www.azlyrics.com/lyrics/linkinpark/nobodycansaveme.html", coverFrontSong: folderCover("front", "lp", "oml"), coverSideSong: folderCover("side", "lp", "oml"), coverBackSong: folderCover("back", "lp", "oml"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Good Goodbye", url: "https://genius.com/Linkin-park-good-goodbye-lyrics", coverFrontSong: folderCover("front", "lp", "oml"), coverSideSong: folderCover("side", "lp", "oml"), coverBackSong: folderCover("back", "lp", "oml"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Talking To Myself", url: "https://genius.com/Linkin-park-talking-to-myself-lyrics", coverFrontSong: folderCover("front", "lp", "oml"), coverSideSong: folderCover("side", "lp", "oml"), coverBackSong: folderCover("back", "lp", "oml"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Battle Symphony", url: "https://www.azlyrics.com/lyrics/linkinpark/battlesymphony.html", coverFrontSong: folderCover("front", "lp", "oml"), coverSideSong: folderCover("side", "lp", "oml"), coverBackSong: folderCover("back", "lp", "oml"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Invisible", url: "https://www.azlyrics.com/lyrics/linkinpark/invisible.html", coverFrontSong: folderCover("front", "lp", "oml"), coverSideSong: folderCover("side", "lp", "oml"), coverBackSong: folderCover("back", "lp", "oml"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Heavy", url: "https://genius.com/Linkin-park-heavy-lyrics", coverFrontSong: folderCover("front", "lp", "oml"), coverSideSong: folderCover("side", "lp", "oml"), coverBackSong: folderCover("back", "lp", "oml"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Sorry for Now", url: "https://www.azlyrics.com/lyrics/linkinpark/sorryfornow.html", coverFrontSong: folderCover("front", "lp", "oml"), coverSideSong: folderCover("side", "lp", "oml"), coverBackSong: folderCover("back", "lp", "oml"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Halfway Right", url: "https://lyricsfa.com/2017/03/13/linkin-park-halfway-right-lyrics/", coverFrontSong: folderCover("front", "lp", "oml"), coverSideSong: folderCover("side", "lp", "oml"), coverBackSong: folderCover("back", "lp", "oml"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "One More Light", url: "https://www.azlyrics.com/lyrics/linkinpark/onemorelight.html", coverFrontSong: folderCover("front", "lp", "oml"), coverSideSong: folderCover("side", "lp", "oml"), coverBackSong: folderCover("back", "lp", "oml"), genreMusicalBand:"metal"},
					{band: "Linkin Park", featuringBand: "", songName: "Sharp Edges", url: "https://www.azlyrics.com/lyrics/linkinpark/sharpedges.html", coverFrontSong: folderCover("front", "lp", "oml"), coverSideSong: folderCover("side", "lp", "oml"), coverBackSong: folderCover("back", "lp", "oml"), genreMusicalBand:"metal"},
					{band: "Fort Minor", featuringBand: "", songName: "Believe Me", url: "https://www.azlyrics.com/lyrics/fortminor/believeme.html", coverFrontSong: folderCover("front", "fm", "trt"), coverSideSong: folderCover("side", "fm", "trt"), coverBackSong: folderCover("back", "fm", "trt"), genreMusicalBand:"hipHop"},
					{band: "Fort Minor", featuringBand: "", songName: "Where'd You Go", url: "https://www.azlyrics.com/lyrics/fortminor/wheredyougo.html", coverFrontSong: folderCover("front", "fm", "trt"), coverSideSong: folderCover("side", "fm", "trt"), coverBackSong: folderCover("back", "fm", "trt"), genreMusicalBand:"hipHop"},
					{band: "Fort Minor", featuringBand: "", songName: "Discograph Complete", url: "http://www.taringa.net/comunidades/linkinparktaringa/7314323/Fort-Minor-Discografia-MediaFire-320-Kbps.html", coverFrontSong: folderCover("front", "fm", "trt"), coverSideSong: folderCover("side", "fm", "trt"), coverBackSong: folderCover("back", "fm", "trt"), genreMusicalBand:"hipHop"},
					{band: "Audioslave", featuringBand: "", songName: "Like a Stone", url: "https://www.azlyrics.com/lyrics/audioslave/likeastone.html", coverFrontSong: folderCover("front", "audioslave", "audioslave"), coverSideSong: folderCover("side", "audioslave", "audioslave"), coverBackSong: folderCover("back", "audioslave", "audioslave"), genreMusicalBand:"rock"}];

	$scope.learnWithImg = [{image: "http://indiehaven.com/wp-content/uploads/2014/04/shrugging-guy.jpg.jpg?w=640", name: "Shrugged"},
						   {image: "https://carliemacullen.files.wordpress.com/2012/02/frown.jpg", name: "frowning"}];
	$scope.tab = [];
	$scope.tip = [];
	$scope.hq = [{url: "https://lasqueihqonline.com/2017/03/03/the-walking-dead/", title: "The Walking Dead", subTitle: "Complete Collection", cover: "../data/image/cover-hq/the-walking-dead-hq.jpg", genre: "survivor horror", onOffLink: ""}];

	$scope.bodyHuman = [];
	$scope.learn = [{url: "https://www.gamestolearnenglish.com/", nameOne: "Games", nameTwo:"", nameThree: "", imgLearn: "http://www.freeradicalscience.com/file/2017/06/how_to_enjoy_your_free_pc_games_more.png", category: "game"},
					{url: "http://www.gingersoftware.com/content/grammar-rules/verbs/list-of-irregular-verbs/", nameOne: "Irregular Verbs", nameTwo: "", nameThree: "", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "learn"},
					{url: "http://conjugator.reverso.net/conjugation-english.html", nameOne: "Conjugation Verbs", nameTwo: "English", nameThree: "", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "learn"},
					{url: "https://en.oxforddictionaries.com/spelling/prefixes-and-suffixes", nameOne: "Preffixes", nameTwo: " and ", nameThree: "Suffixes", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "learn"},
					{url: "https://www.grammarly.com/blog/verb-tenses/", nameOne: "Verb Tense", nameTwo: "Grammarly", nameThree: "", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "learn"},
					{url: "https://www.learnamericanenglishonline.com/Yellow%20Level/Y27_English_Verb_Tenses_Negative.html", nameOne: "Verb Tense", nameTwo: " Learn American ", nameThree: "English", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "learn"},
					{url: "http://www.solinguainglesa.com.br/conteudo/VerbToBe3.php", nameOne: "Form With and Without", nameTwo: " Contraction of Verb ", nameThree: "To Be in S. Past", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "learn"},
					{url: "http://www.solinguainglesa.com.br/conteudo/VerbToBe2.php", nameOne: "Form With and Without", nameTwo: " Contraction of Verb ", nameThree: "To Be in S. Present", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "learn"},
					{url: "https://www.englishclub.com/grammar/verb-tenses_past.htm", nameOne: "Simple Past", nameTwo: "", nameThree: "", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "learn"},
					{url: "https://www.englishclub.com/grammar/verb-tenses_present-simple.htm", nameOne: "Simple Present", nameTwo: "", nameThree: "", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "learn"},
					{url: "https://www.englishclub.com/grammar/verb-tenses_future.htm", nameOne: "Simple Future", nameTwo: "", nameThree: "", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "learn"},
					{url: "https://s-media-cache-ak0.pinimg.com/564x/7c/3b/65/7c3b652cab5ecefe6c2ce6da66dfc4d4.jpg", nameOne: "Accessing Special Character", nameTwo: "", nameThree: "", imgLearn: "https://s-media-cache-ak0.pinimg.com/564x/7c/3b/65/7c3b652cab5ecefe6c2ce6da66dfc4d4.jpg", category: "symbol"},
					{url: "https://previews.123rf.com/images/esancai/esancai1408/esancai140800082/31038926-25-currency-symbols-countries-and-their-name-around-the-world-Stock-Vector.jpg", nameOne: "Currency Symbols", nameTwo: "", nameThree: "", imgLearn: "https://previews.123rf.com/images/esancai/esancai1408/esancai140800082/31038926-25-currency-symbols-countries-and-their-name-around-the-world-Stock-Vector.jpg", category: "symbol"},
					{url: "http://blog.oxforddictionaries.com/2015/03/signs-and-symbols-the-names-of-punctuation-marks/", nameOne: "Signs and Symbols Names", nameTwo: "", nameThree: "", imgLearn: "http://www.narayanpurpolice.in/wp-content/uploads/2017/05/noImage.png", category: "symbol"},
					{url: "https://dryuc24b85zbr.cloudfront.net/tes/resources/6449409/image?width=500&height=500&version=1415352217000", nameOne: "", nameTwo: "Math Symbols", nameThree: "", imgLearn: "https://dryuc24b85zbr.cloudfront.net/tes/resources/6449409/image?width=500&height=500&version=1415352217000", category: "symbol"},
					{url: "http://www.english-at-home.com/pronunciation/silent-sounds/", nameOne: "Silent Sounds", nameTwo: "", nameThree: "", imgLearn: "http://proprivatus.com/wp-content/uploads/2014/01/shh-2.jpg", category: ""},
					{url: "", nameOne: "", nameTwo: "", nameThree: "", imgLearn: "", category: ""},
					{url: "", nameOne: "", nameTwo: "", nameThree: "", imgLearn: "", category: ""},
					{url: "", nameOne: "", nameTwo: "", nameThree: "", imgLearn: "", category: ""},
					{url: "", nameOne: "", nameTwo: "", nameThree: "", imgLearn: "", category: ""},
					{url: "", nameOne: "", nameTwo: "", nameThree: "", imgLearn: "", category: ""},
					{url: "", nameOne: "", nameTwo: "", nameThree: "", imgLearn: "", category: ""}];
	
	$scope.movie = [{url: "magnet:?xt=urn:btih:19C3729EF3C4E419E709C3A68F3174891FA1BC77&dn=xXx%20Reativado%202017%20%281080p%29%20DUBLADO&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2790%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fglotorrents.pw%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.piratepublic.com%3a1337%2fannounce",
					 titleMovie: "Triplo X: 3", subTitleMovie: "", genreMovie: "action", onOffLink: "", coverMovie: "https://www.kenyabuzz.com/media/uploads/movies/xxx-poster.jpg"},
					{url: "magnet:?xt=urn:btih:EF1D75A04CF503505B60992C940F7DDA53C30FF4&dn=O%20Vingador%20do%20Futuro%20%282012%29%201080p%205.1%20Dual%20%c3%81udio%20-%20Douglasvip&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.ccc.de%3a80%2fannounce&tr=udp%3a%2f%2f11.rarbg.com%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.istole.it%3a80%2fannounce&tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.ccc.de%3a80%2fannounce&tr=udp%3a%2f%2ffr33dom.h33t.com%3a3310%2fannounce&tr=udp%3a%2f%2ftracker.yify-torrents.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.prq.to%2fannounce&tr=http%3a%2f%2ftracker.yify-torrents.com%2fannounce&tr=udp%3a%2f%2ftracker.1337x.org%3a80%2fannounce&tr=http%3a%2f%2fwww.h33t.com%3a3310%2fannounce&tr=http%3a%2f%2fexodus.desync.com%2fannounce&tr=http%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=http%3a%2f%2ftracker.blazing.de%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=http%3a%2f%2fbt.careland.com.cn%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ex.ua%3a80%2fannounce&tr=udp%3a%2f%2fcoppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2f12.rarbg.me%3a80%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=http%3a%2f%2fexodus.desync.com%3a6969%2fannounce",
					 titleMovie: "O Vingador do Futuro", subTitleMovie: "", genreMovie: "action", onOffLink: "", coverMovie: "http://www.depoisdasessao.com.br/wp-content/uploads/2015/11/O-Vingador-do-Futuro.jpg"},
				 	{url: "",
					 titleMovie: "As Branquelas", subTitleMovie: "", genreMovie: "comedy", onOffLink: "disable", coverMovie: "https://dornelasdesign.files.wordpress.com/2017/03/as-branquelas-divulgacao.jpg?resize=760%2C1127"},
				 	{url: "magnet:?xt=urn:btih:E87419080CC0D2AC8A606C551B6C07F72E6945A5&dn=13%c2%ba%20Andar%20%281999%29%20Bluray%20720p%20Dublado%20-%20WWW.THEPIRATEFILMES.COM&tr=udp%3a//tracker.trackerfix.com%3a80/announce",
					 titleMovie: "13rd Andar (1999)", subTitleMovie: "", genreMovie: "fiction", onOffLink: "", coverMovie: "http://1.bp.blogspot.com/-szY9OHcKWQ4/Tt-rwi0MM9I/AAAAAAAABRo/y_9V9CadJEE/s1600/13+floor.jpg"},
				 	{url: "magnet:?xt=urn:btih:c2e66fc4ad10e95d6e0a25200fcf886fc9d5a098&dn=Homem-Formiga+%282015%29+5.1+CH+Dublado+1080p+%28By-LuanHarper%29",
					 titleMovie: "Ant Man", subTitleMovie: "Homem Formiga", genreMovie: "action", onOffLink: "", coverMovie: "http://www.coverwhiz.com/content/Ant-Man.jpg"},
				 	{url: "magnet:?xt=urn:btih:8C8CE268CB57F62DB4F9AF7CBBD6E86ECB5F8DCA&dn=Hardcore%20-%20Miss%c3%a3o%20Extrema%202016%20Bluray%201080p%20Dublado%20-%20WWW.THEPIRATEFILMES.COM&tr=udp%3a//tracker.publicbt.com%3a80/announce",
					 titleMovie: "Hardcore", subTitleMovie: " Missao Extrema", genreMovie: "comedy", onOffLink: "", coverMovie: "https://images-na.ssl-images-amazon.com/images/I/81xulw2LoRL._SY550_.jpg"},
					 {url: "magnet:?xt=urn:btih:1149EE73C8BD4EFAFD5DD70D4EF18ACC7DC2D9A1&dn=Zerando%20a%20Vida%202016%20WEBRip%201080p%20Dublado%20-%20WWW.THEPIRATEFILMES.COM&tr=udp%3a//tracker.trackerfix.com%3a80/announce",
					 titleMovie: "Zerando a Vida", subTitleMovie: "", genreMovie: "comedy", onOffLink: "", coverMovie: "http://br.web.img2.acsta.net/pictures/16/04/20/18/21/018675.jpg"},
					 {url: "",
					 titleMovie: "Truque de Mestre", subTitleMovie: "", genreMovie: "action", onOffLink: "disable", coverMovie: "http://www.oblogdamari.com/wp-content/uploads/2016/07/Truque-de-Mestre-Poster.jpg"},
					 {url: "magnet:?xt=urn:btih:0308C0DB0533CBA4D753E0B7728BF62831CDA6C4&dn=Truque%20de%20Mestre%20O%202%c2%ba%20Ato%202016%20%284K%29%20DUBLADO&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2720%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fglotorrents.pw%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.piratepublic.com%3a1337%2fannounce",
					 titleMovie: "Truque de Mestre 2", subTitleMovie: " Segundo Ato", genreMovie: "action", onOffLink: "", coverMovie: "http://portal.julund.com.br/wp-content/uploads/2016/08/poster.jpg"},
					 {url: "magnet:?xt=urn:btih:ED1DBD6449244A8A1A9D496E8FC8CCEBD626EDAD&dn=O%20Holofote%20n%c3%a3o%20%c3%a9%20Para%20Todos%202017%20%5bBluRay%5d%20%281080p%29%20DUBLADO&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2730%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=http%3a%2f%2fglotorrents.pw%3a80%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.piratepublic.com%3a1337%2fannounce",
					 titleMovie: "O Holofote nao e Para Todos", subTitleMovie: "", genreMovie: "comedy", onOffLink: "", coverMovie: "http://www.thepiratetorrents.xyz/wp-content/uploads/2017/07/O-Holofote-N%C3%A3o-%C3%A9-Para-Todos-Torrent-%E2%80%93-BluRay-720p-e-1080p-Dual-%C3%81udio-Download-2017.jpg"},
					 {url: "magnet:?xt=urn:btih:ac27c2ff2a3c8b83d4f39033c41499ed4435f0f5&dn=Ace+Ventura+2%3A+Um+Maluco+na+%26Aacute%3Bfrica+%281995%29+-+Dublado+720p&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.istole.it%3A6969&tr=udp%3A%2F%2Ftracker.ccc.de%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337",
					 titleMovie: "Ace Ventura 2", subTitleMovie: "", genreMovie: "comedy", onOffLink: "", coverMovie: "https://ae01.alicdn.com/kf/HTB10puBQFXXXXbhXFXXq6xXFXXXR/-font-b-ACE-b-font-font-b-VENTURA-b-font-WHEN-NATURE-CALLS-Classic-Movie.jpg"},
					 {url: "magnet:?xt=urn:btih:F2FA913C4EAAA104222F62E2538DDA925229181E&dn=Game%20of%20Thrones%20-%206%c2%aa%20Temporada%20%282016%29%20Dual%20%c3%81udio%20HDTV%20720p%20%28By-LuanHarper%29&tr=udp%3a%2f%2ftracker.trackerfix.com%3a80%2fannounce&tr=udp%3a%2f%2f9.rarbg.me%3a2710%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2710%2fannounce&tr=http%3a%2f%2fpow7.com%2fannounce&tr=%2audp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fcoppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.istole.it%3a80%2fannounce&tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&tr=http%3a%2f%2ftracker.blazing.de%2fannounce&tr=http%3a%2f%2ft2.pow7.com%2fannounce&tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2f%2fannounce",
					 titleMovie: "Game of Thrones", subTitleMovie: " Season 6", genreMovie: "action", onOffLink: "disable", coverMovie: "http://watchersonthewall.com/wp-content/uploads/2016/02/poster2.jpg"},
					 {url: "magnet:?xt=urn:btih:4B92BEEE4FEFE05618D5B561F1369327E834D205&dn=Game%20of%20Thrones%202017%20%E2%80%93%207%C2%AA%20Temporada%20Completa%20%5bWEB-DL%5d%20WWW.BLUDV.COM&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2790%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=http%3a%2f%2fglotorrents.pw%3a80%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2ftorrent.gresille.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker.aletorrenty.pl%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.piratepublic.com%3a1337%2fannounce",
					 titleMovie: "Game of Thrones", subTitleMovie: " Season 7", genreMovie: "action", onOffLink: "", coverMovie: "http://static.webshopapp.com/shops/035312/files/104649299/blu-ray-game-of-thrones-seizoen-7.jpg"}];
});


// {url: "",
// 					 titleMovie: "", subTitleMovie: "", genreMovie: "", onOffLink: ""}

// {url: "", nameOne: "", nameTwo: "", nameThree: "", imgLearn: "", category: ""}

// {band: "", songName: "", url: "", coverSong: ""}