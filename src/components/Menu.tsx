import React from 'react';
import SortButton from './SortButton';
import AlcoTypeSelectionButton from './AlcoTypeSelectionButton';
import BackButton from './BackButton';
import NewDrinkButton from './NewDrinkButton';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import LogOutButton from '@/components/LogOutButton';
import LogInButton from '@/components/LogInButton';

export default function Menu() {
	const location = useRouter().pathname;
	const { data: session } = useSession();
	return (
		<header>
			<nav>
				<div className="navigation-container">
					<div className="upper-nav">
						<img src="/images/icon.png" alt="Лого" className="logo-image"></img>
						{session &&
							(location !== '/' ? (
								<BackButton />
							) : (
								<>
									<SortButton />
									<AlcoTypeSelectionButton />
								</>
							))}
					</div>
					<div className="lower-nav ">
						{session ? (
							<>
								<NewDrinkButton />
								<LogOutButton />
							</>
						) : (
							<LogInButton />
						)}
					</div>
				</div>
			</nav>
		</header>
	);
}
