import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './PostCreateWidget.css';

export class PostCreateWidget extends Component {
  addPost = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${this.props.showAddPost ? styles.appear : ''}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Create new post</h2>
          <input
            placeholder="Author"
            className={styles['form-field']}
            ref="name"
          />
          <input
            placeholder="Title"
            className={styles['form-field']}
            ref="title"
          />
          <textarea
            placeholder="Content"
            className={styles['form-field']}
            ref="content"
          />
          <button
            className={styles['post-submit-button']}
            onClick={this.addPost}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
};

export default PostCreateWidget;
