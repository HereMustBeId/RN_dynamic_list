# RN_dynamic_list
Dynamic List

This component helps create a list of items, which consists of:
1. Close button
    It is required to delete or clear (if it is the last one) one list item

2. Everything that you want
    The component has renderEachItem method that is used for creating everything that you need

3. Add Button
    Is used to add one default item  


For examle:
1. 
    <p align="center">
        <img src="https://user-images.githubusercontent.com/18067700/43197865-472ad786-9015-11e8-8823-5f670c6d399a.jpg" >
    </p>

2.
    <p align="center">
        <img src="https://user-images.githubusercontent.com/18067700/43200296-c7880662-901d-11e8-96c8-d11fc0da7175.jpg" >
    </p>

The component has two required props:
1. data [Array]
    The first item of array MUST be default item. 
    One item can only be an object!

2. renderMethod [func]
    Renders each list item
