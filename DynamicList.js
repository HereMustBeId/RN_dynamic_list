import React, {Component} from 'react';
import {
   Text,
   TouchableOpacity,
   View
} from 'react-native';
import PropTypes from 'prop-types';

import Icon, { ICONS } from '../Icon';
import Hr from './Hr';

import styles from './DynamicListStyle';

/**
 * This component make the list of different items
 * It has several functions:
 *  1) make items list through the render method from props
 *  2) add new item thanks to add button
 *  3) delete item
 */
export default class DynamicList extends Component<Props> {
   static propTypes = {
      // The first item of array MUST be default item. One item can only be an object!
      data: PropTypes.array.isRequired,

      // Method that render each item
      renderMethod: PropTypes.func.isRequired,

      renderBeforeAddButton: PropTypes.func,

      onRemoveChild: PropTypes.func
   };

   constructor (props) {
      super (props);

      this._parent = props.parentComponent;

      // saving default item
      this._defaultItem = Object.assign({}, props.data[0]);

      this.state = {
         dataItems: null
      }
   }

   /**
    *
    * @param newProps
    */
   componentWillReceiveProps (newProps) {
      if (newProps.data && !this.state.dataItems) {
         this.setState({
            dataItems: newProps.data
         });
      }
   }

   /**
    * This method implements add default item.
    */
   _onAdd () {
      const items = this.state.dataItems.concat(Object.assign({}, this._defaultItem));
      const newKey = items.length - 1;
      items[newKey].key = '' + (newKey);
      this.setState({
         dataItems: items
      });
   }

   /**
    * Remove one of elements
    * Check if data is empty - make one visible one default data
    */
   _onRemove (index) {
      let items;
      if (this.state.dataItems.length === 1) {
         items = [this._defaultItem];
      } else {
         items = this.state.dataItems.slice();
         items.splice(index, 1);
      }
      this.setState({
         dataItems: items
      });
      this.props.onRemoveChild && this.props.onRemoveChild(index);
   }

   /**
    * Each item consists of close button and item, that renders by parent components
    */
   renderEachItem () {
      let result  = [];
      this.state.dataItems.map((item, index) => {
         result.push(
            <View key={index}>
               {
                  !!index &&
                  <Hr style={ styles.dimensionsLine } />
               }
               <View
                  style={ styles.row }>
                  {/* CLOSE BUTTON */}
                  <TouchableOpacity onPress={ () => this._onRemove(index) }>
                     <Icon
                        icon={ ICONS.clear }
                        style={ styles.closeBtn }
                        withRightMargin={ true } />
                  </TouchableOpacity>
                  {/* Item */}
                  { this.props.renderMethod.call(this._parent, item, index) }

               </View>
               {
                  /* before add button */
                  this.props.renderBeforeAddButton &&
                  this.props.renderBeforeAddButton(index, item)
               }
            </View>
         );
      });
      return result;
   }

   /**
    * Main render method
    */
   render() {
      return (
         <View style={ styles.container }>
            { this.renderEachItem() }

            {/* Add button */}
            <TouchableOpacity onPress={ () => this._onAdd() }>
               <View style={ styles.row }>
                  <Icon
                     icon={ICONS.plus}
                     withRightMargin={true} />
                  <Text style={ styles.addText }>Добавить</Text>
               </View>
            </TouchableOpacity>
         </View>
      );
   }
}