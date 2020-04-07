# RCT2 Fleecer



The RCT2 Fleecer app is a small web app to help manage the ride ticket prices in pay-per-ride scenarios for the games RollerCoaster Tycoon 2, RollerCoaster Tycoon Classic and OpenRCT2.

## Features

- Build up a list of rides and get the maximum price you can charge for them, or the 'good value' price.
- Designed to work well on mobile.
- Manually sort the order of your rides.
- Automatic duplicate ride type detection that informs you which rides are duplicate types of each other (having more than one ride of the same type decreases its value by about 25%).
- Compatible with RCT2, RCT Classic and OpenRCT2.
- Data can be saved and persists even when you close the page (for the more web savvy, this is currently using LocalStorage, though that may change).

## Built with

- [Angular CLI](https://github.com/angular/angular-cli) v9.1.0.
- [Bulma](https://bulma.io/) v0.8.0

## Contributing

Feel free to fork this project and create your own pull requests.

If you don't want to or can't contribute directly, bugs and feature requests can be raised [here](https://github.com/invalio19/rct2-fleecer/issues).

## FAQs

**1. Why are two of my rides considered duplicates of each other even though they are different ride types?**

Some ride types in RCT2 are considered the same for some game mechanics, including the mechanics used for determining ride price value. These rides are:

- The **Car Ride** and **Monster Trucks**.
- The **Classic Mini Roller Coaster** (OpenRCT2 only) and **Junior Roller Coaster**.
- The **Corkscrew Roller Coaster** and **Hypercoaster**.
- The **Hyper-Twister** and **Steel Twister**.
- The **Spinning Wild Mouse** and **Steel Wild Mouse**.

## Authors

- Shay Irwin: [Invalio](https://github.com/invalio19)

## License

- [MIT](http://opensource.org/licenses/mit-license.php). See the [LICENSE](https://raw.githubusercontent.com/invalio19/rct2-fleecer/master/LICENSE) file for details.
- Copyright 2020 &copy; Invalio.

## Acknowledgements

- [Deurklink](https://www.youtube.com/channel/UCcU9si2fIVJ-KoIDX9xYpdw), for his [work](https://forums.openrct2.org/topic/2737-guide-how-much-can-you-charge-for-your-rides/) in uncovering how the ride pricing is determined.
- [Marcel Vos](https://www.youtube.com/channel/UCBlXovStrlQkVA2xJEROUNg), for [explaining](https://www.youtube.com/watch?v=rUGUwZIr4n0) how this and many other RCT2 mechanics work.
- [Shottysteve](https://www.youtube.com/shottysteve), for designing the [calculator](https://rct2calc.shottysteve.com/) that helped inspire this one.
- [Ted 'IntelOrca' John](http://intelorca.co.uk/) and the various contributors to the [OpenRCT2](https://openrct2.org/) project.