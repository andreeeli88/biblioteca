
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,  // Esto indica que es un componente autónomo
  imports: [CommonModule, FormsModule, ReactiveFormsModule],  // Importar módulos necesarios
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent {
  userForm: FormGroup;
  users: Array<{ email: string, password: string, role: string }> = [];
  isEditMode = false;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['admin', Validators.required]
    });
  }

  // Manejo del formulario cuando se envía
  onSubmit() {
    const userData = this.userForm.value;

    if (this.isEditMode && this.editingIndex !== null) {
      // Actualización de un usuario existente
      this.users[this.editingIndex] = userData;
    } else {
      // Agregar un nuevo usuario
      this.users.push(userData);
    }

    // Limpiar el formulario y restablecer los modos
    this.clearForm();
  }

  // Editar usuario seleccionado
  editUser(index: number) {
    const user = this.users[index];
    this.userForm.patchValue(user);
    this.isEditMode = true;
    this.editingIndex = index;
  }

  // Eliminar usuario
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  // Cancelar la edición
  cancelEdit() {
    this.clearForm();
  }

  // Limpiar el formulario
  clearForm() {
    this.userForm.reset({
      email: '',
      password: '',
      role: 'admin'
    });
    this.isEditMode = false;
    this.editingIndex = null;
  }
}
