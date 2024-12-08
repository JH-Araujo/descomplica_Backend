import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  }, []);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    console.log(`id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa} \n inicio: ${inicioTarefa} \n fim: ${fimTarefa} \n recurso: ${recursoTarefa} \n status: ${statusTarefa}`);

    setTarefas([
      ...tarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa,
      },
    ]);
    handleClose();
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Card sx={style}>
        <CardHeader title="Tarefas" subheader="Cadastro de Tarefas" />
        <CardContent>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <Input
                id="tarefa_titulo"
                value={tituloTarefa}
                onChange={(e) => setTituloTarefa(e.target.value)}
                placeholder="Título da Tarefa"
                sx={{ padding: '10px', borderRadius: '5px', borderColor: '#ddd' }}
              />
              <FormHelperText>Título da Tarefa</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <Input
                id="tarefa_descricao"
                value={descricaoTarefa}
                onChange={(e) => setDescricaoTarefa(e.target.value)}
                placeholder="Descrição da Tarefa"
                sx={{ padding: '10px', borderRadius: '5px', borderColor: '#ddd' }}
              />
              <FormHelperText>Descrição da Tarefa</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FormControl fullWidth margin="normal">
                <Input
                  id="tarefa_inicio"
                  type="date"
                  value={inicioTarefa}
                  onChange={(e) => setInicioTarefa(e.target.value)}
                  sx={{ padding: '10px', borderRadius: '5px' }}
                />
                <FormHelperText>Início da Tarefa</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth margin="normal">
                <Input
                  id="tarefa_fim"
                  type="date"
                  value={fimTarefa}
                  onChange={(e) => setFimTarefa(e.target.value)}
                  sx={{ padding: '10px', borderRadius: '5px' }}
                />
                <FormHelperText>Fim da Tarefa</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  onChange={handleRecurso}
                  sx={{ borderRadius: '5px' }}
                >
                  <MenuItem value="Recurso 1">Recurso 1</MenuItem>
                  <MenuItem value="Recurso 2">Recurso 2</MenuItem>
                  <MenuItem value="Recurso 3">Recurso 3</MenuItem>
                </Select>
                <FormHelperText>Recurso da Tarefa</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  onChange={handleStatus}
                  sx={{ borderRadius: '5px' }}
                >
                  <MenuItem value="Aguardando">Aguardando</MenuItem>
                  <MenuItem value="Em Andamento">Em Andamento</MenuItem>
                  <MenuItem value="Concluída">Concluída</MenuItem>
                </Select>
                <FormHelperText>Status da Tarefa</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="flex-end" mt={2}>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                onClick={handleSalvar}
                sx={{ marginRight: 2 }}
              >
                Salvar
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="success" onClick={handleClose}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
  boxShadow: 24,
};

export default CriarTarefa;
