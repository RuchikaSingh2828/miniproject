import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('Button rendering test', () => {
    const btn = renderer.create(
        <Button text="Click Me" handler={()=>{}} />
    );

    let tree = btn.toJSON();
    expect(tree).toMatchSnapshot();
})