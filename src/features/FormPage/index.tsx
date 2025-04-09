import { showRootComponent } from 'components/Common';
import './styles.scss';
import * as SDK from 'azure-devops-extension-sdk';
import { POCDemo } from './POCDemo';
import { DocumentPage } from './DocumentPage';

SDK.init({ loaded: false }).then(() => {
    showRootComponent(<POCDemo />);
});
