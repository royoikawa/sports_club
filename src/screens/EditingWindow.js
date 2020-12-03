import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider as PaperProvider} from 'react-native-paper';


  //const [visible, setVisible] = React.useState(false);


export default class EditingWindow extends React.Component {


  constructor(){
    super();
    this.state = {
        setVisible: false,
        visible : false,
        };
}

showdialog = () => 
{
    this.setState({ visible: true });
}

hidedialog = () =>

{
    this.setState({ visible: false });
}

  componentWillUnmount() {
    this._isMounted = false;
  }

    render = () => {
        

  return (
    <View>
      <Button onPress={this.showdialog }>Show Dialog</Button>

       <PaperProvider>

       <Portal>
        <Dialog visible={this.state.visible} onDismiss={this.hidedialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={this.hidedialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      
        </Portal>
       </PaperProvider>
      
    </View>
  );

  }

 



}

  