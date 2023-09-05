import React from 'react';
import SortButton from './SortButton';
import AlcoTypeSelectionButton from './AlcoTypeSelectionButton';
import BackButton from './BackButton';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import LogOutButton from '@/components/menu/LogOutButton';
import LogInButton from '@/components/menu/LogInButton';
import ProfileButton from '@/components/menu/ProfileButton';
import Link from 'next/link';

export default function Menu() {
	const location = useRouter().pathname;
	const { data: session } = useSession();
	return (
		<header>
			<nav>
				<div className="navigation-container">
					<div className="upper-nav">
						<Link href="/">
							<img src="/images/icon.png" alt="Лого" className="logo-image" />
						</Link>
						<BackButton />
						{session &&
							(location === '/' ||
								location === '/profile/drinks' ||
								location === '/profile/rates') && (
								<>
									<SortButton />
									<AlcoTypeSelectionButton />
								</>
							)}
					</div>
					<div className="lower-nav ">
						{session ? (
							<>
								<ProfileButton />
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
