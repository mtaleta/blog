import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {
renderTitleField(field) {
  return (
    <div>
      <imput
        type="text"
        {...field.input}
      />
    </div>
  );
}

  render() {
    return (
      <form>
        <Field
          name="title" 
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

export default reduxFrom({
  form: 'PostsNewForm'
})(PostsNew);

