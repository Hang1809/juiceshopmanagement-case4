package com.codegym.model.dto;

import com.codegym.model.Role;
import com.codegym.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class UserDTO {
    private Long id;

//    @NotBlank(message = "Name is required")
//    @Size(min = 5, max = 20, message = "Name's length must be between 5 and 20 characters")
    private String name;

    @NotBlank(message = "Username is required")
    @Size(min = 5, max = 20, message = "Username's length must be between 5 and 20 characters")
    private String username;

    @NotBlank(message = "Password is required")
    @Size(min = 5, max = 30, message = "Password's length must be between 5 and 30 characters")
    private String password;

    @Email(message = "Wrong email format. Please follow this pattern: abc@co.com")
    private String email;

    private String address;

    @Pattern(regexp = "^[0][1-9][0-9]{8,9}$", message = "Wrong phone format. Please follow this pattern: 0981234567")
    private String phone;

    private boolean isBlocked;

    @Valid
    private RoleDTO role;
//    public UserDTO(Long id,String name, String username, String password, String email, String address, String phone, boolean isBlocked, Role role) {
//        this.id = id;
//        this.name= name;
//        this.username = username;
//        this.password = password;
//        this.email = email;
//        this.address = address;
//        this.phone = phone;
//        this.isBlocked = isBlocked;
//        this.role = role.toRoleDTO();
//    }

    public UserDTO(Long id, String name, String username, String email, String address, String phone, boolean isBlocked, Role role) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.isBlocked = isBlocked;
        this.role = role.toRoleDTO();
    }

    public UserDTO(Long id,String name, String username, String email, String address, String phone, boolean isBlocked, RoleDTO role) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.isBlocked = isBlocked;
        this.role = role;
    }

    public UserDTO(Long id, String username) {
        this.id = id;
        this.username = username;
    }

    public User toUser() {
        return new User()
                .setId(id)
                .setName(name)
                .setUsername(username)
                .setPassword(password)
                .setEmail(email)
                .setAddress(address)
                .setPhone(phone)
                .setBlocked(isBlocked)
                .setRole(role.toRole());
    }
}