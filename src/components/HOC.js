import moment from 'moment';

export default function withDateTime(Component) {
    function Wrapper(props) {
		const { date } = props;
		const upgDate = moment(date).fromNow();
		return <Component {...props} date={upgDate}/>
	}

	return Wrapper;
}