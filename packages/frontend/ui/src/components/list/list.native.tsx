import { FlashList } from "@shopify/flash-list";
import { PropsWithChildren } from "react";
import { View } from "react-native";
import { H1 } from "typography";
import { BaseListItem, ListProps } from "./list.props";

export const List = <T extends BaseListItem>({
  renderItem,
  data,
  title,
  estimatedItemSize,
  horizontal,
}: PropsWithChildren<ListProps<T>>): React.ReactElement => {
  return (
    <View className="h-full w-full">
      {title && <H1>{title}</H1>}
      <FlashList
        estimatedItemSize={estimatedItemSize}
        renderItem={renderItem}
        data={data}
        horizontal={horizontal}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-5 w-5" />}
      />
    </View>
  );
};
