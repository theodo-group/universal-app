import React, { PropsWithChildren } from "react";
import { FlatList, View } from "react-native";
import { H1 } from "typography";
import { BaseListItem, ListProps } from "./list.props";

export const List = <T extends BaseListItem>({
  renderItem,
  data,
  title,
  estimatedItemSize,
  horizontal,
}: PropsWithChildren<ListProps<T>>) => {
  return (
    <View className="h-full w-full">
      {title && <H1>{title}</H1>}
      <FlatList
        data={data}
        className="w-full"
        renderItem={renderItem}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-5 w-5" />}
        getItemLayout={(_, index) => ({
          length: estimatedItemSize,
          offset: estimatedItemSize * index,
          index,
        })}
      />
    </View>
  );
};
