import React from 'react';
import SortButton from './SortButton';
import AlcoTypeSelectionButton from './AlcoTypeSelectionButton';
import BackButton from './BackButton';
import NewDrinkButton from './NewDrinkButton';
import {useRouter} from "next/router";

export default function Menu() {
	const location = useRouter().pathname;
	return (
		<header>
			<nav>
				<div className="navigation-container">
					<div className="upper-nav">
						<img src="/images/icon.png" alt="Лого" className="logo-image"></img>
						{location !== '/' ? (
							<BackButton />
						) : (
							<>
								<SortButton />
								<AlcoTypeSelectionButton />
							</>
						)}
					</div>
					<div className="lower-nav ">
						<NewDrinkButton />
						<img
							src="/images/logout.png"
							alt="Логаут"
							className="logout-image"></img>
					</div>
				</div>
			</nav>
		</header>
	);
}
