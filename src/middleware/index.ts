import fetch from '../fetch';
import { Dispatch } from 'react-redux';

export default function clientMiddleware() {
    return ({ dispatch, getState }: { dispatch: Dispatch; getState: () => any }) => (next: (action: any) => void) => (action: any) => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        const { graphql, types, ...rest } = action;
        if (!graphql) {
            return next(action);
        }

        const [REQUEST, SUCCESS, FAILURE] = types;
        next({ ...rest, type: REQUEST });
        const header = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        const actionPromise = fetch({
            url: '/graphql',
            method: 'post',
            headers: header,
            data: { query: graphql }
        });
        actionPromise
            .then(
                result => next({ ...rest, data: result.data, type: SUCCESS }),
                error => next({ ...rest, error, type: FAILURE })
            )
            .catch(error => {
                console.error('MIDDLEWARE ERROR:', error);
                next({ ...rest, error, type: FAILURE });
            });

        return actionPromise;
    };
}
