import { FlatList, Text } from 'react-native';
import OutputItem from './OutputItem';
function renderExpenseItem(itemData) {
    return <OutputItem {...itemData.item} />;
}
function OutputList({ expense }) {
    return (
        <FlatList
            data={expense}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.name}
        />
    );
}

export default OutputList;