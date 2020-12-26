// React
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Theme,
} from '@material-ui/core'
// Icons
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
// types
import { Pet } from '../types'

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    imagePaper: {
      alignItems: 'flex-end',
      backgroundColor: 'lightgray',
      display: 'flex',
      height: 300,
      justifyContent: 'flex-end',
      margin: '36px auto 36px',
      width: 300,
    },
    cameraIcon: {
      backgroundColor: 'darkgray',
      marginRight: 8,
      marginBottom: 8,
    },
    formWrapper: {
      margin: '0px auto',
      maxWidth: 600,
    },
    formControl: {
      width: '100%',
    },
  })
)

const PostEdit: FC = () => {
  const classes = useStyles()
  const [pet, setPet] = useState('')
  const [petList, setPetList] = useState([] as Pet[])

  useEffect(() => {
    // TODO:DBからfetchでpetを取得する
    const petList = []
    petList.push({id: 1, name: 'pet1'})
    petList.push({id: 2, name: 'pet2'})
    petList.push({ id: 3, name: 'pet3' })
    setPetList([...petList])
  }, [])

  const handlePetChange = (event: ChangeEvent<{ value: unknown }>) => {
    setPet(event.target.value as string)
  }

  return (
    <Container component='main' maxWidth='md'>
      <Paper className={classes.imagePaper}>
        <IconButton className={classes.cameraIcon}>
          <PhotoCameraIcon />
        </IconButton>
      </Paper>
      <div className={classes.formWrapper}>
        <FormControl className={classes.formControl}>
          <InputLabel id='select-pet-label'>
            うちの子選択
          </InputLabel>
          <Select
            labelId='select-pet-label'
            id='select-pet'
            value={pet}
            onChange={handlePetChange}
          >
            {petList.map(pet => (
              <MenuItem
                key={pet.id}
                value={pet.name}
              >
                {pet.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Container>
  )
}

export default PostEdit
