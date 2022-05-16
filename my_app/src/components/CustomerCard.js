import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// Components
import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
} from '@material-ui/core';
import ModalConfirm from './ModalConfirm';

// Icons
import EditIcon from '@material-ui/icons/Edit';
 import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}))

const CustomerCard = ({
  id,
  name,
  lastname,
  email,
  avatar,
  className,
  onRemoveCustomer,
}) => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleConfirmModal = id => {
    onRemoveCustomer(id);
    handleToggleOpenModal();
  };

  const handleRemoveCustomer = () => {
    handleToggleOpenModal();
  };

  return (
    <>
      <Card className={ classNames(className, classes.root) }>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={ avatar }>
              R
            </Avatar>
          }
          title={ `${ name } ${ lastname }` }
          subheader={ email }
        />
        <CardActions disableSpacing>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={ handleRemoveCustomer }>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
      open={ openModal }
      onClose={ handleToggleOpenModal }
      onConfirm={ () => handleConfirmModal(id) }
      title="Are you sure want to delete?"
      message="If you delete, you can't come back"
      />
    </>
  );
}

export default CustomerCard;
