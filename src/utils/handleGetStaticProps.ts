import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { SelectedPage, setSelectedPage } from '../redux/app/actions';
import { initializeStore } from '../redux/store';

export function handleGetStaticProps(context: GetStaticPropsContext, selectedPage: SelectedPage): GetStaticPropsResult<unknown> {
    const store = initializeStore();
    
    store.dispatch(setSelectedPage(selectedPage));

    return {
        props: {
            initialReduxState: store.getState(),
        },
    };
}
