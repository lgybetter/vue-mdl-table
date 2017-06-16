export default {
    functional: true,
    props: {
        column: Object,
				data: Object,
        render: Function,
        index: Number,
    },
    render: (h, ctx) => {
        const params = {
            column: ctx.props.row,
						data: ctx.props.data,
            index: ctx.props.index
        };
        return ctx.props.render(h, params);
    }
};