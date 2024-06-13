import NavMenu from '../NavMenu/NavMenu';
import { StyledHeader } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<img src='/assets/shared/logo.svg' alt='' />
			<NavMenu />
		</StyledHeader>
	);
};

export default Header;
